const {emailValidator,passwordValidator,
       nameValidator,loginpasswordValidator} = require('../utility/validator');
const CustomError = require('../utility/customError');
const _= require('lodash');
const User= require('../models/userModel');
const config= require('../config/constants');
const jwt= require('jsonwebtoken');




class userServices{
    async signUp(req,data){
        data=_.pick(data,['email','password','con_password','name']);
    emailValidator(data)
    passwordValidator(data)  
    nameValidator(data)  
    let isExist = await User.findOne({name:data.name});
   if(isExist) throw new  CustomError("name has already been registered by another user", 400,false); 
    if(await User.findOne({email:data.email})) throw new  CustomError("email already exist", 400,false);  
    else{
      const newUser= await new User(data)
      await  newUser.save()
      return null
    }

    }
    async signIn(req,data){
        await emailValidator(data)
        loginpasswordValidator(data) 
           let user =await User.findOne({email:data.email})
             if(!user) throw  new CustomError("no user found", 404,false); 
           else{ let payload={ name:data.name, _id:user._id}
           const token = jwt.sign(payload, process.env.jwtSecret, {expiresIn: config.accessTokenexpires_expiresIn});
             const refreshToken = jwt.sign(payload,process.env.jwtSecret, {expiresIn: config.refreshToken_expiresIn });
       user = _.pick(user, ["_id","email",'name']);
             return{success:true,  status:200,
             data:{user,
             token:`Bearer ${token}`,
             refreshToken:`Bearer ${refreshToken}`,}} 
           }
    }

}
module.exports= new userServices()

