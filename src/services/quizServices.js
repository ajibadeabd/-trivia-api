const CustomError = require('../utility/customError');
const triviaJsonFormat = require('../utility/trivia');
const {getQuestion,getCorrectAnswer} = require('../utility/question.js');
const _= require('lodash');
const Quiz= require('../models/quizModel');
const config= require('../config/constants');
const { over } = require('lodash');




class quizServices{
   async getQuestion(){
    let Question=[];
    // select 10 questions at ramdom

for(let i=0; i<10; i++){
   Question.push(getQuestion(triviaJsonFormat)[i]);
}
//return selected question
   return (Question);
    }


   async submitAnswer(req,data){
       //this are the 40 question
        let overalQuestion =getQuestion(triviaJsonFormat);

        //list of answer and question id 
        let {question1,question2,question3,question4,question5,question6,
            question7,question8,question9,question10}=req.body;

        //answer id
        let allQuestion=[question1,question2,question3,question4,question5,question6,
            question7,question8,question9,question10];

            //list of correct answer
       let response = (getCorrectAnswer(allQuestion,overalQuestion))
       let inPercentage = `${response.length/10*100}%`
             let saveScore = await new Quiz({
                 score:inPercentage,
                 userId:req.user.id
             });
             //save the result in database
             saveScore.save();

             // return result
    return   {no_of_correct_answers:response.length,
        no_of_wrong_answers:10-response.length,
        scores_in_percentage:inPercentage
    }
    }

}
module.exports= new quizServices()