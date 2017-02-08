var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var revws = require('../models/Review');
router.post('/:id',function(req,res){
   var rwid = req.params.id;
   revws.create({
      review : req.body.review,
      restid : rwid
   },function(err,done){
      if(err){
         res.send(err);
      }
      else{
         res.json("done");
      }
   });
});
router.get('/:id',function(req,res){
   var rwsid = req.params.id;
    revws.find({
      restid :rwsid
   },function(err,rws){
      if(err){
         res.send(err);
      }
      else{
         res.json(rws);
      }
   });
});
module.exports = router;