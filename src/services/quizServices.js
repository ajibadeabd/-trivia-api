const CustomError = require('../utility/customError');
const triviaJsonFormat = require('../utility/trivia');
const {getQuestion,getCorrectAnswer,validateQuestionsId} = require('../utility/question.js');
const _= require('lodash');
const User= require('../models/userModel');
const config= require('../config/constants');




class quizServices{
    // get 10 questions ramdomly
   async getQuestion(){
    let Question=[];
for(let i=0; i<10; i++){
   Question.push(getQuestion(triviaJsonFormat)[i]);
}
   return (Question);
    }
    submitAnswer(req,data){
        
        let correct=[];
        let {question1,question2,question3,question4,question5,question6,
            question7,question8,question9,question10}=req.body;
            //answer id
            let allQuestion=[question1,question2,question3,question4,question5,question6,
                question7,question8,question9,question10];
                  
        for(let j=0; j<allQuestion.length; j++){
            if(typeof parseInt(allQuestion[j].id)!=="number"){
                throw new  CustomError("all id must be a number", 400,false);
            }
                        if(allQuestion[j]==undefined ||
                            allQuestion[j]==='' ||
                            allQuestion[j].id==='' ||
                            allQuestion[j].id===undefined){
            throw new  CustomError("please provide all questions id", 400,false);}}

                //validate if all question id is supplied
            //     validateQuestionsId(allQuestion)
            //     let overalQuestion =getQuestion(triviaJsonFormat);
            //   let correctAnswer=  getCorrectAnswer(allQuestion,overalQuestion);
        return;
        //  {answerInPercentage:((correctAnswer.correct/10)*100+'%'),
        // inCorrectAnswer:(10-correctAnswer.correct),
        // CorrectAnswer:(correctAnswer.correct),
        //     }
    }

}
module.exports= new quizServices()