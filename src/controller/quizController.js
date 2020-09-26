const quizServ = require('../services/quizServices');
const response = require('../utility/response');
class quizcontroller{
    async getQuestion(req,res){
        let data = await quizServ.getQuestion(req,res)
      res.status(200).json(response(true,'Ten random question has ben fetch succefully',data))
    }
    async submitAnswer (req,res){
        let data = await quizServ.submitAnswer(req,req.body)
      res.status(200).json(response(true,'successfully logged in',data))
    }
}
module.exports= new quizcontroller()