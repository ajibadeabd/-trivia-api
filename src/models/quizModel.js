const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')
const { schema } = require('./userModel')
let quizSchma= new Schema({
    score:{
        type:String,
        require:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:'users'
    },
},
{timestamps:true})

module.exports = model('quiz', quizSchma)