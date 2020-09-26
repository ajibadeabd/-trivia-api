const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')
let quizSchma= new Schema({
    score:{
        type:String,
        require:true
    },
},
{timestamps:true})

module.exports = model('product', quizSchma)