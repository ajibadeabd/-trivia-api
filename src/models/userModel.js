const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')
const bcrypt = require('bcryptjs')
// const { string } = require('joi')
let usersSchema= new Schema({
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

usersSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  });

module.exports = model('users', usersSchema)