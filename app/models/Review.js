var mongodb = require('mongodb');
var mongoose = require('mongoose');

var schema =new  mongoose.Schema({
	review:{
		type:String,
		required:true
	},
	restid:{
		type:String,
		required:true
	}
	

});


var revw = mongoose.model('revw',schema);
	
	module.exports = revw;