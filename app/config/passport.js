  var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy; 
var expressValidator = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var JWT_SECRETE = 'restaurant';
var restuser = require('../models/Restuser');
module.exports = 
 passport.use('local-signup',new LocalStrategy({
     usernameField : 'email',
        passwordField : 'password',
        passReqToCallback:true
 },
    function(req,email,password,done){
      req.checkBody('email','Invalid email').notEmpty().isEmail();
      req.checkBody('password',' Password is too short').notEmpty().isLength({min:4});
      var errors = req.validationErrors();
      if(errors){
        done(null,errors);
      }else{
      restuser.findOne({email:email},function(err,user5){
        console.log(user5);
        if(err){
          done(null,{msg:err});
        }
        else if (user5){
              done(null,{msg:'User alredy exist'});
        }
        else{
             bcrypt.genSalt(10, function(err, salt) {
         bcrypt.hash(password, salt, function(err, hash) {
              restuser.create({email:email,password:hash},
                 function(err,res2){
                    if(err){
                      done(null,{msg:err});
                     }else{
                       done(null,{msg:"You have successfully signedUp"});
                      }
                  });
          });
      });
          
        }
      });
    }
  }
));

 passport.serializeUser(function(user,done){
done(null,user);
});
passport.deserializeUser(function(id,done){
  user.findById(id,function(err,user){
    done(err,user);
  });
      });
 passport.use('local-signin',new LocalStrategy({
     usernameField : 'email',
        passwordField : 'password',
        passReqToCallback:true
 },
     function(req,email,password,done){
      req.checkBody('email','Invalid email').notEmpty().isEmail();
      req.checkBody('password','Invalid password').notEmpty().isLength({min:4});
      var errors = req.validationErrors();
      if(errors){
        done(null,errors);
      }else{  
      restuser.findOne({email:email},function(err,user){
        if(err){
          done(null,false,{msg:' not found'});
        }
        else if (user){
          bcrypt.compare(password, user.password, function(err, match) {
            if(err){
              done(null,{msg:'Password matching error'});
            }
            else if(match){
              var token = jwt.encode(user, JWT_SECRETE);
              done(null,{token:token});
            }else{
              done(null,{msg:'Password is mismatched'});
            }
          });
        }
        else{
          done(null,{msg:'User not exist'});
        }
      });
    }
  }
));