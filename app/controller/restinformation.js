var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var restinfo = require('../models/Restinformation');
var jwt = require('jwt-simple'); 
var JWT_SECRETE = 'restaurant';
router.post('/restinformation',function(req,res){
   var token = req.headers.authorization ;
   var user = jwt.decode(token,JWT_SECRETE);
   restinfo.create({
   	restaurantname:req.body.restaurantname,
   	price : req.body.price,
   	location : req.body.location,
   	address : req.body.address,
   	landmark : req.body.landmark,
   	description :req.body.description,
   	email : req.body.email,
   	contact : req.body.contact,
   	imgurl : req.body.imgurl,
      user : user._id
   },function(err,created){
   	if(err){
   		res.send(err);
   	}
   	else{
   		res.json("created");
   	}
   });	
});
router.get('/restinformation',function(req,res){
   restinfo.find({},function(err,got){
      if(err){
         res.send(err);
      }
      else{
         
         res.json(got);
      }
   });
});
router.get('/:id',function(req,res){
   var myid = req.params.id;
   restinfo.findOne({
      _id : mongoose.Types.ObjectId(myid)
   },function(err,detail){
      if(err){
         res.send(err);
      }
      else{
         res.json(detail);
      }
   });
});

router.delete('/:id',function(req,res){
   var token = req.headers.authorization ;
   var user = jwt.decode(token,JWT_SECRETE);
   var mid = req.params.id;
   restinfo.remove({
      _id : mongoose.Types.ObjectId(mid)
   },function(err,rmv){
      if(err){
         res.send(err);
      }
      else{
         res.json(rmv);
      }
   });
});

module.exports = router;