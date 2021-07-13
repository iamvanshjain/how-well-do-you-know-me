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
play("Where do i work? ", "Microsoft");

play("Where do i live? ", "Agra");

console.log("your score is ", score)