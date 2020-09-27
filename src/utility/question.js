const CustomError = require('./customError');

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
    
    exports.getCorrectAnswer=(allQuestion,overalQuestion)=>{
        let correct = [];
        for(let j=0; j<allQuestion.length; j++){
            
            if(allQuestion[j]==undefined ||
                allQuestion[j]==='' ||
                allQuestion[j].id==='' ||
                allQuestion[j].id===undefined){
throw new  CustomError("please provide all questions id", 400,false);}}

for(let j=0; j<allQuestion.length; j++){

for(let i=0; i<overalQuestion.length; i++){
// console.log(overalQuestion[i].id)
if(overalQuestion[i].id==allQuestion[j].id && 
    overalQuestion[i].answer==allQuestion[j].answer){
     correct.push(overalQuestion[i])
}
        }
};
  return correct
    }
 