// Andrew Ton
// Assignment 3 - Word Guess Game
// game.js

//TO DO
//styling
// loss scenario
// add more poke
// pics

//-------------------//
// Declare Variables //
//-------------------//
var wins = 0;
var losses = 0;
var guesses = 7;
var keysGuessed = [];
var randPoke = [];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var blanks = [];
var newPoke;

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
    "ZAPDOS",
    "ARTICUNO",
    "BLASTOISE",
    "CHARIZARD",
    "CHARMANDER",
    "CHIKORITA",
    "CYNDAQUILL",
    "EEVEE",
    "GENGAR",
    "HAUNTER",
    "LAPRAS",
    "MARILL",
    "MUDKIP",
    "PSYDUCK",
    "SANDSHREW",
    "SANDSLASH",
    "SNORLAX",
    "TORCHIC",
    "TOTODILE",
    "VULPIX"
]


//-----------//
// Functions //
//-----------//

// Picks and returns random Pokemon from Pokelist, creates mystery blanks, newPoke is to track current pokemon for image
function pickPokemon() {
    newPoke = pokeList[Math.floor(Math.random() * pokeList.length)];
    randPoke = newPoke.split("");
    blanks = [];
    for (i = 0; i < randPoke.length; i++) {
        blanks.push("__ ");
    }

    var blankLetters = "";
    for (j = 0; j < blanks.length; j++) {
        blankLetters += blanks[j];
    }

    var strBlanks = convertString(blanks);

    document.querySelector("#pokemon").innerHTML = strBlanks;
    console.log(convertString(randPoke));
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
};

function convertString (arr) {
    var str = "";
    for (i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

// Reset game and updates stats
function resetGame() {

    //change image
    document.getElementById("pokepic").src = "assets/images/pokemon/" + newPoke + ".png";

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

    // if guess is not correct, reduce and update guesses
    if (!randPoke.includes(key)) {
        guesses--;
        document.querySelector("#guessesCounter").innerHTML = guesses;
    }

    // if key is found in randomPoke, remove the letter from array, and fill the letter in blanks
    for (i = 0; i < randPoke.length; i++) {
        if (key === randPoke[i]) {
            randPoke[i] = 0;
            blanks[i] = key;
            // console.log(blanks); //test
        }
    }

    strBlanks = convertString(blanks);
    document.querySelector("#pokemon").innerHTML = strBlanks; //update blank

    // Updates letters that have been guessed
    keysGuessed.push(key);
    document.querySelector("#keyCounter").innerHTML = keysGuessed;

    // Win condition, updates wins
    if (!blanks.includes("__ ")) {
        wins++;
        // alert("win"); //test
        resetGame();
    }

    // Lose condition, updates losses
    if (guesses == 0) {
        losses++;
        // alert("lose"); //test
        resetGame();
    }
};





//---------------//
// Starting code //
//---------------//

//initial pick
randPoke = pickPokemon();

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
    var key = event.key.toUpperCase();
    if (isLetter(key)) {
        play(key);
    }
}