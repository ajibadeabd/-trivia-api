// const trivia =  require('./src/utility/trivia')

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
    