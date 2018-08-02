// Andrew Ton
// Assignment 3 - Word Guess Game
// game.js

// Declare Variables
var wins = 0;
var losses = 0;
var guesses = 7;
var keysGuessed = [];
var randPoke = [];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var blanks = [];

// To update text on page
var winsText = document.getElementById("winsCounter");
var lossesText = document.getElementById("lossesCounter");
var guessesText = document.getElementById("guessesCounter");
var keyText = document.getElementById("keyCounter");
var pokemonText = document.getElementById("pokemon");

// List of pokemon
var pokeList = [
    "PIKACHU",
    "BULBASAUR",
    "ZAPDOS"
]

// Picks and returns random Pokemon from Pokelist, creates mystery blanks
function pickPokemon() {
    randPoke = pokeList[Math.floor(Math.random() * pokeList.length)].split("");
    blanks = [];
    for (i = 0; i < randPoke.length; i++) {
        blanks.push("__ ");
    }
    document.querySelector("#pokemon").innerHTML = blanks;
    return randPoke;
};

// checks if user guess is letter or duplicate guess
function isLetter(key) {
    if (alphabet.includes(key)) {

        //check for duplicate letters
        if (!keysGuessed.includes(key)) {
            return true;
        }
    }
    return false;
}



// Reset game and update stats
function resetGame() {
    keysGuessed = [];
    guesses = 7;
    pickPokemon();
    document.querySelector("#winsCounter").innerHTML = wins;

    document.querySelector("#lossesCounter").innerHTML = losses;

    document.querySelector("#guessesCounter").innerHTML = guesses;

    document.querySelector("#keyCounter").innerHTML = "None";


};

// Play the game
function play(key) {
    
    for (i = 0; i < randPoke.length; i++) {

        // if key is found in randomPoke, remove the letter from array, and fill the letter in blanks
        if (key === randPoke[i]) {
            randPoke[i] = 0;
            blanks[i] = key;
            console.log(blanks);
            document.querySelector("#pokemon").innerHTML = blanks; //update blank
        }

    }
    keysGuessed.push(key);
    document.querySelector("#keyCounter").innerHTML = keysGuessed;


    if (!blanks.includes("__ ")) {
        wins++;
        alert("win"); //test
        resetGame();
    }


};





//---------------//
// Starting code //
//---------------//

//initial pick
randPoke = pickPokemon();
console.log(randPoke); //test


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
    var key = event.key.toUpperCase();
    if (isLetter(key)) {

        play(key);





    }

}