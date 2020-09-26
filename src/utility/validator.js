const mongoose  = require('mongoose');
const CustomError = require('./CustomError')


    exports.emailValidator =async (data)=>{
        const emailRegex = /[\w|.]+[@]+\w+[.]+[\w|.]*$/gm;
        if (!data.email) throw new CustomError("please provide your email");
        const isEmailValid = await emailRegex.test(data.email);
        if (!isEmailValid) {throw new CustomError("please provide a valid email"); }
}

exports.passwordValidator =(data)=>{
    if(!data.password) throw new CustomError("enter your password", 400,false);
    if(data.password.length<5) throw new CustomError("password must be more than four character", 400,false);
   
    if(!this.pass(data))
    throw new CustomError("password must contain a number and upper/lowercase letter", 400,false);
    if(!data.con_password) throw new  CustomError("please confirm  your password", 400,false);
   if(data.password  !== data.con_password) throw new CustomError("password dont match", 400,false);
}
exports.loginpasswordValidator =(data)=>{
    if(!data.password) throw new CustomError("enter your password", 400,false);
}

exports.nameValidator =(data)=>{
    if(!data.name) throw new CustomError("enter your name", 400,false); 
}
exports.idValidator =(id)=>{
   let isValid= mongoose.Types.ObjectId.isValid(id)

    if(!isValid) throw new CustomError("invalid id", 400,false);
}
 exports.pass =(data)=>{
     let num=false;
     let lower=false;
     let upper=false;
     let char=false;
    let split = data.password.split('');
for(let i=0;i<split.length;i++){
if(isNaN(split[i]) && split[i]==split[i].toUpperCase())
upper = true;
 if(isNaN(split[i]) &&  split[i]==split[i].toLowerCase() )
lower=true;
if(!isNaN(split[i]) )
num=true
} 
if(num===true && lower===true && upper===true) 
return true
else 
return false
 }
