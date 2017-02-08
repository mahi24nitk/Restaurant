var mongodb = require('mongodb');
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	restaurantname:String,
	price:Number,
	location:String,
	address : String,
	landmark:String,
	description:String,
	email:String,
	contact:String,
	imgurl:String,
	user:String
});
var ri= mongoose.model('restinformation',schema);
module.exports = ri;