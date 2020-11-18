//initilizes variables
var userGuess = []
var systemAnswer = Math.floor(Math.random() * 100) + 1;
var playedOnce = false;
//Put cursor in input box
document.getElementById("userInput").focus();
//Allows user to hit enter instead of submit
var input = document.getElementById("userInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitBtn").click();
    }
});

function checkGuess() {
    document.getElementById("headline").innerHTML = "Guess the number!";
    //puts cursor in input box
    document.getElementById("userInput").focus();
    //Sets button value
    document.getElementById("newGame").innerHTML = "Reset Game";
    //takes user input & assigns to variable
    let userInput = document.getElementById("userInput").value;
    //Converts user input to int
    userInput = parseInt(userInput);
    //Verify input parameters & add to array if valid
    if (Number.isInteger(userInput) == false) {
        //Verify valid int
        document.getElementById("systemResponse").innerHTML = "Invalid entry: Enter a valid number!";
    } else if (userInput < 1 || userInput > 100) {
        //Verify between 1 & 100;
        document.getElementById("systemResponse").innerHTML = "Invalid entry: Enter a number between 1 & 100!";
    } else {
        //Push userInput into userguess array
        userGuess.push(userInput);
        //verify user input to system answer
        for (let i = 0; i < userGuess.length; i++) {
            //If user answer & system answer match user wins & game reset
            if (userGuess[i] == systemAnswer) {
                document.getElementById("systemResponse").innerHTML = "You win with " + userGuess.length + " total guesses!";
                document.getElementById("previousGuesses").innerHTML = userGuess;
                document.getElementById("newGame").innerHTML = "New Game!";
                document.getElementById("headline").innerHTML = systemAnswer + " was right!";
                userGuess = [];
                systemAnswer = Math.floor(Math.random() * 100) + 1;
            //if user answer lower than system answer too low is displayed
            } else if (userGuess[i] < systemAnswer) {
                document.getElementById("systemResponse").innerHTML = "Too low!";
                document.getElementById("previousGuesses").innerHTML = userGuess;
            //if user answer is high than system answer too high is displayed
            } else if (userGuess[i] > systemAnswer) {
                document.getElementById("systemResponse").innerHTML = "Too high!";
                document.getElementById("previousGuesses").innerHTML = userGuess;
            //if anything other than the above scenarios occur error is displayed (this is unlikely)
            } else {
                document.getElementById("systemResponse").innerHTML = "SYSTEM ERROR!!";
            }
        };
    };

    //if user guess to many  times game over is displayed & game is reset
    if (userGuess.length >= 10) {
        document.getElementById("systemResponse").innerHTML = "Too many guesses. Try again!";
        document.getElementById("newGame").innerHTML = "New Game!";
        document.getElementById("headline").innerHTML = "Game over!";
        userGuess = [];
        systemAnswer = Math.floor(Math.random() * 100) + 1;
        document.getElementById("userInput").value = "";
    //Clear user input box
    } else {
        document.getElementById("userInput").value = "";
    }
};

//Resets game on new/reset game btn click
function resetGame() {
    userGuess = [];
    systemAnswer = Math.floor(Math.random() * 100) + 1;
    document.getElementById("previousGuesses").innerHTML = "Guess a number between 1 & 100. You have 10 tries!";
    document.getElementById("newGame").innerHTML = "Reset Game!";
    document.getElementById("systemResponse").innerHTML = "---";
    document.getElementById("headline").innerHTML = "Guess the number!";
    //puts cursor in input box
    document.getElementById("userInput").focus();
}