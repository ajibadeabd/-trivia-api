const { json } = require('express');
// const trivia =  require('./src/utility/trivia')
const CustomError = require('../utility/customError');

exports.getQuestion=(data)=>{
// let Question = [];
for(let i=0; i<data.length;i++){
    let j=  i+Math.floor(Math.random()*(data.length-i));
    let temp = data[j];
    data[j] = data[i];
    data[i] = temp;
};
    return data
    }
    
    exports.getCorrectAnswer=(allQuestion,defaultQuestion)=>{
        for(let i=0; i<allQuestion.length; i++){
            //check if all question id is supplied
        //  else{ 
    const get =defaultQuestion;
        for(let j=0; j<get.length; j++){
            //check for the correct answer 
            let correct = [];
            // console.log(allQuestion[i].answer)

            if(
                // get[j].id==allQuestion[i].id && 
                get[j].answer==allQuestion[i].answer
                ){
                    console.log(get[j].answer)
            //    return {success:true,correct:correct.push(get[j])}
            }
        }
        }

    }
    exports.validateQuestionsId=(allQuestion)=>{
        
        for(let j=0; j<allQuestion.length; j++){
if(typeof JSON.parse(allQuestion[j].id)!=="number"){
    throw new  CustomError("all id must be a number", 400,false);
}
            if(allQuestion[j]==undefined ||
                allQuestion[j]==='' ||
                allQuestion[j].id==='' ||
                allQuestion[j].id===undefined){
throw new  CustomError("please provide all questions id", 400,false);}}
    }