const userServ = require('../services/userServices');
const response = require('../utility/response');

class usercontroller{
   async signUp(req,res){
    let data = await userServ.signUp(req,req.body)
    res.status(201).json(response(true,'successfully registerd',data))
 
    }
    async signIn (req,res){
        let data = await userServ.signIn(req,req.body)
        res.status(200).json(response(true,'successfully logged in',data))
    }

}
module.exports= new usercontroller()