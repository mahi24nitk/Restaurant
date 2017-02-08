var mongodb = require('mongodb');
var mongoose = require('mongoose');

var schema =new  mongoose.Schema({
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true

	}
	

});


var restuser = mongoose.model('restuser',schema);
	
	module.exports = restuser;