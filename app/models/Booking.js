
var mongodb = require('mongodb');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema =new Schema({
name:{
	type:String,
	required:true
},
email:{
	type:String,
	required:true
},
contact:{
	type:Number,
	required:true
},
date:{
	type:String,
	required:true
},
time:{
	type:String,
	required:true
},
tableno:{
	type:Number,
	required:true
},
restid:String,
userid:String

	
	

});


var booking = mongoose.model('booking',schema);
	
	module.exports = booking;