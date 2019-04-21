
// **************************** Setting Varibles **************************** // 

var words = [ // Word Array 
    "chicken",
    "steak",
    "shrimp",
    "pasta",
    "fish"
];

//Empty variables to store values later
var randomWord = ""; // pull a random word
var lettersArray = [] // blank slots 
var blanks = 0; // blank slots for incriments
var guessingArray = []; // user guessing Array


//Counter Variables
var wins = 0; // Current Wins
var losses = 0; // Current Losses
var guessesRemaining = 10; // Total Allowed Turns


// **************************** Main Game Loop **************************** // 

function game(){ //Game Function Loop
    randomWord = words[Math.floor(Math.random() * words.length)]; // Create a random word from the words string

    lettersArray = randomWord.split(""); // turns randomWord into a string

    blanks = lettersArray.length; // black slots = to the randomWord Length

    console.log(randomWord) // Testing random word

    for(var i = 0; i < blanks; i++){
        guessingArray.push("_"); // push guesses to "_"
    }

    document.getElementById('guess').innerHTML = guessingArray.join(' '); // display how many letters user has to guess 
}

// **************************** Check If User Guess is Equal to userGuessing Array **************************** // 

function checkLetters(letter) { // start of the function
    var guessingArray = false; // guessingArray being set to false
    
    for (var i = 0; i < blanks; i++) { // For loop to check if == 
        if (lettersArray[i] == guessingArray) { // user guess to randomWord
            guessingArray = true; // changing guessing array to true

            console.log(guessingArray) // checking guessingArray
        }
    }
    
    if (guessingArray) {
        
        for (var i = 0; i < blanks; i++) {  
            if (lettersArray[i] == letter) {
                blanks[i] = letter;
            }
        }
    }

    else {
        guessesRemaining--; // if != take away a turn
    }
}

// **************************** Win / Loss Counter **************************** // 

function winLossCounter() { // Win counter incriment
    
    if (guessingArray.toString() == blanks.toString()) { // win counter
        wins++; // wins = wins + 1 
        document.getElementById("wins").innerHTML = " " + wins; // adding win to document

    
    } else if (guessesRemaining === 0) { // losses counter
        losses++; // losses = losses + 1 
        document.getElementById("lose").innerHTML = " " + losses; // printing loss to DOM
    }

    document.getElementById("tries").innerHTML = " " + guessesRemaining; // tries left (Countdown)
}


// **************************** Event listener with game loop **************************** // 

    game(); // run game loop

    document.onkeyup = function (event) {   //Document Keyup Function
    var guesses = String.fromCharCode(event.keyCode); // event for on Key Up function
    
    checkLetters(guesses); //running guess checking 
    
    winLossCounter(); // run the Win / Lose Counter 

    console.log(guesses); // console.log User Guess
}

