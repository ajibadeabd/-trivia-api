var express = require('express');
var router = express.Router();
const userCtrl = require('../controller/userCntroller')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const auth = passport.authenticate('jwt',{session:false})

/* GET home page. */

router.post("/login",userCtrl.signIn)
router.post("/register",userCtrl.signUp)

module.exports = router;
