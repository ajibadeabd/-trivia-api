const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')
const bcrypt = require('bcryptjs')
// const { string } = require('joi')
let usersSchma= new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
},
{timestamps:true})

module.exports = model('users', usersSchma)