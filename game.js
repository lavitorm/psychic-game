//parameters and return values
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var guessesSoFar = document.getElementById("guessesSoFar");
//https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//setup
var winsCount = 0;
var lossesCount = 0;
var defaultGuessesLeft = 10;
var guessesLeftCount = defaultGuessesLeft;
var guessesArray = [];
// Math.random to generate a random letter
var getRandomLetter = function () {
    randomLetter = allLetters[Math.floor(Math.random()*allLetters.length)]
    console.log(randomLetter);
    return randomLetter
}
//display game statistics	
var displayStats = function () {
    wins.innerHTML = "Wins: " + winsCount
    losses.innerHTML = "Losses: " + lossesCount
    guessesLeft.innerHTML = "Guesses Left: " + guessesLeftCount
    guessesSoFar.innerHTML = "Your Guesses So Far: " + guessesArray
}
//game reset
var resetGame = function () {
    guessesArray = [];
    guessesLeftCount = defaultGuessesLeft;
    currentLetter = getRandomLetter();
}
var userWon = function (userLetter) {
    return userLetter === currentLetter 
}
var userLost = function () {
    return guessesLeftCount === 0;
}
//user's keyboard input and display
var currentLetter = getRandomLetter();
    displayStats();
    document.onkeydown = function (event) {
    var userLetter = event.key;
    guessesLeftCount--
    guessesArray.push(userLetter)
    if (userWon(userLetter)) {
        winsCount++;
        resetGame();
} 
    if (userLost()) {
        lossesCount++;
        resetGame();
}
    displayStats();
}