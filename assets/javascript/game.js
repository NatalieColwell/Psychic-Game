
// array of every letter option
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables to hold user comand values

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guessesSoFar = [];
var userGuess = null;

//computer generates random letter from the letters array
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("wins: " + wins + " losses: " + losses + " guessesLeft: " + guessesLeft + " user guesses so far: " + guessesSoFar + " computer guessed: " + computerGuess);

//key function for when user hits letter on keyboard
document.onkeyup = function(event) {
    //saves the key user pressed
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//determins user & computer wins/losses
    if (guessesSoFar.indexOf(userGuess) <0 && letters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;

        guessesLeft--;
    }

    if (computerGuess == userGuess) {
        wins++;
        console.log("YOU WON!");
        guessesLeft = 9;
        guessesSoFar = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("w: " + wins + " l: " + losses + " left: " + guessesLeft + " used: " + guessesSoFar + " comp: " + computerGuess);
    }

    if (guessesLeft == 0) {
        losses++;
        console.log("YOU LOSE");
        guessesLeft = 9;
        guessesSoFar = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("w: " + wins + " l: " + losses + " left: " + guessesLeft + " used: " + guessesSoFar + " comp: " + computerGuess);
    }
    //displays outcome on html
    var html = "<p><strong>Wins: </strong>" +  wins + "</p>" + "<p><strong>Losses: </strong>" + losses + "<p><strong>Total guesses left: </strong>" + guessesLeft + "</p>" + "<p><strong>Your guesses so far: </strong>" + guessesSoFar +  "  " +" </p>";
    document.querySelector("#guessingGame").innerHTML = html;
}



