var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple'); 
var JWT_SECRETE = 'restaurant';
var book = require('../models/Booking');
var mongoose = require('mongoose');

router.post('/:id',function (req,res) {
   var rid = req.params.id;
	var token = req.headers.authorization ;
   var user = jwt.decode(token,JWT_SECRETE);
   book.create({
   	name:req.body.name,
   	email : req.body.email,
   	contact : req.body.contact,
      date:req.body.date,
      time:req.body.time,
      tableno:req.body.tableno,  
      userid:user._id,
      restid:rid
   	
    
   },function(err,created){
   	if(err){
   		res.send(err);
   	}
   	else{
   		
   		res.json("created");
   	}
   });	
});
   
 
router.delete('/:id',function(req,res){
   var token = req.headers.authorization ;
   var user = jwt.decode(token,JWT_SECRETE);
   var bid = req.params.id;
   book.remove({
      _id : mongoose.Types.ObjectId(bid)
   },function(err,rm){
      if(err){
         res.send(err);
      }
      else{
         console.log(rm);
         res.json(rm);
      }
   });
});
router.get('/:id',function(req,res){
   var token = req.headers.authorization ;
   var user = jwt.decode(token,JWT_SECRETE);
   var bid = req.params.id;
   book.findOne({
      _id : mongoose.Types.ObjectId(bid)
   },function(err,edt){
      if(err){
         res.send(err);
      }
      else{
         console.log(edt);
         res.json(edt);
      }
   });
});
router.put('/:id',function(req,res){
   
   var uid = req.params.id;
  book.update({
      _id : mongoose.Types.ObjectId(uid)  
   },{$set:{name:req.body.name,email:req.body.email,contact:req.body.contact,
             time:req.body.time,date:req.body.date,tableno:req.body.tableno
   }},function(err,udt){
      if(err){
         res.send(err);
      }
      else{
         res.json(udt);
      }
   });
});

module.exports = router;