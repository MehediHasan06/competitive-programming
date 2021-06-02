/**
 * *Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
 */

var guessNum = prompt("Enter The value between 1-10 inclusive:");
var randomNum = Math.floor(Math.random() * 10) + 1;
if(guessNum == randomNum){
    console.log("Good Work !", guessNum, randomNum, typeof guessNum);
} else {
    console.log("Not Matched", guessNum, randomNum, typeof guessNum);
}

// The guess number we're getting by using "prompt" keyword is "string !".
// we could use any of math.floor() or, math.ceil() here.
