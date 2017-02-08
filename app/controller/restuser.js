var express = require('express');
var router = express.Router();
 var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy; 
var restuser = require('../models/Restuser');
var pass = require('../config/passport');
router.post('/signin',passport.authenticate('local-signin'),function(req,res){
     res.json(req.user);
 });
router.post('/signup',passport.authenticate('local-signup'),function(req,res){
     res.json(req.user);
});
module.exports = router;