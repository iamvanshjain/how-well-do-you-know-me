var readlineSync = require ("readline-Sync");

var score = 0;
var userName = readlineSync.question("whats's your name? ")

console.log("welcome "+ userName);

function play(question, answer) {
 var userAnswer = readlineSync.question(question);

 if (userAnswer === answer) {
        console.log("You were right!")
        score = score + 1;
 }  else{
        console.log("you were wrong!")
        score = score - 1;
 }
}

//calling the function//
play("Where do I live", "home");

play("What is my birthday date","27 may");

play("Who is my best friend", "noone");

play("Am I good in studies", "yes");

play("How am I rude, thik-thik, calm person");

console.log("your score is ", score);

console.log("what is your score please reply em truely");