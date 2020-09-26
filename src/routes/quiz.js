var express = require('express');
var passport = require('passport');
var Quiz = require('../models/quizModel');
const auth = passport.authenticate('jwt',{session:false})
const quizCtrl = require('../controller/quizController')

var router = express.Router();
// route for get question randomly
router.get('/get_quiz', quizCtrl.getQuestion);
// route for posting answer
router.post('/post_answer', quizCtrl.submitAnswer);

module.exports = router;
