var readlineSync = require('readline-sync');
console.log("Welcome to Dane's Quiz");
// var usernames = readlineSync.question("Your Name? ");
// console.log("\n");
// console.log("Welcome to the quiz" + "!");

var score = 0;
function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log("correct! ");
    score++;
  }
  else{
    console.log("wrong! " + answer);
    score--;
  }
  console.log("your score is ",score);
  console.log("-------------------");
}

var questions =[
    {question: "what's the name of the most subscribed youtuber" + " ",
    answer: "Mrbeast"},
    

    {question: "who's the best musician in Nigeria" + " ",
    answer: "Davido"},

    {question: "who's the richest developer in Nigeria" + " ",
    answer: "Dane"},    

    {question: "who's the founder of Tesla" + " ",
    answer: "Elon musk"},

    {question: "Did you like the quiz" + " ",
    answer: "Yes"},
];

   
    for(var i=0; i<questions.length; i++){
        var currentq = questions[i];
        quiz(currentq.question, currentq.answer)};

        console.log("YOUR FINAL SCORE IS: " + score+"/5")