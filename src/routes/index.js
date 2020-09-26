const express = require('express');
const router = express.Router();
const quizRoute = require('./quiz')
const userRoute = require('./user')

router.use('/user', userRoute);
router.use('/quiz', quizRoute);

module.exports = router;
