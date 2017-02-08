var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var morgan = require ('morgan');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var nodemon = require('nodemon');
var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var session = require('express-session');
var expressValidator = require('express-validator');
var index = require('./routes/index');
var users = require('./routes/users');
var JWT_SECRETE = 'restaurant';
var app = express();
var restinfo = require('./models/Restinformation');
mongoose.connect('mongodb://localhost:27017/tala',function(err,connect){
	console.log("db is connected");
}); 
  var book = require('./models/Booking');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
 app.use(passport.initialize());
  app.use(passport.session());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.render('index');
});

//app.post('/api/restaurant/resinformation',function(req,res){
//  restinfo.create({
  //   location:req.body.location
//  },function(err,res1){
  //  res.json("created");
  //});

//});
app.get('/api/restaurant/bookingdata/:id',function (req,res,next) {
  console.log(req.body);
  var token = req.headers.authorization ;
   var user = jwt.decode(token,JWT_SECRETE);
  var pid = req.params.id;
   book.find({
    restid:pid,userid:user._id

   },function(err,result){
    if(err){
      console.log(err);
      res.send(err);
      
    }
    else{
      console.log(result);
      //res.json.(result);
         res.json(result);
      
    }
   });  
});


app.use('/api/', index);

//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
