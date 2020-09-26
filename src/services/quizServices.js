const CustomError = require('../utility/customError');
const triviaJsonFormat = require('../utility/trivia');
const {getQuestion} = require('../utility/question.js');
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
        let correct=0;
        let inCorrect=0;
        let currentAnswer=[];
        let {answer1,answer2,answer3,answer4,answer5,answer6,
            answer7,answer8,answer9,answer10,a,b,c,d,e,f,g,h,i,j}=req.body;
            let arr=[a,b,c,d,e,f,g,h,i,j];
            let allAnswer=[answer1,answer2,answer3,answer4,answer5,answer6,
                answer7,answer8,answer9,answer10];
            const get =getQuestion(triviaJsonFormat);
            let n=(n)=>{
            const get =getQuestion(triviaJsonFormat);

            for(let i=0; i<get.length; i++){
            // console.log()
            if(get[i].id==n){
            currentAnswer.push( get[i])
            for(let j=0; j<allAnswer.length; j++){
            if(get[i].answer==allAnswer[j])
            correct++
            else 
            inCorrect++
        }


            }
            }
        }
        for(let i=0; i<arr.length; i++){
            n(arr[i])
        }
            // .find(element=>{
            // element.id=2
            // })

        return correct
        // return currentAnswer,(correct,inCorrect)
    }

}
module.exports= new quizServices()