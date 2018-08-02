<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
#Psychic Game

<!-- Put a description of what the project is -->
Created a psychic game where the user tries to guess a random letter in 9 guesses.

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->

[Website](https://atton88.github.io/Psychic-Game/)
[GitHub Profile](https://github.com/atton88)

# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
![About Me](\assets\images\readme1.PNG)

# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->

- HTML
- CSS
- JavaScript
- Bootstrap CDN


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Logic for game to run
```
// On key press, starts function
document.onkeyup = function (event) {
    var userKey = event.key.toLowerCase();

    // Checks to see if key press is a letter, if so start the play function; else, do nothing.
    for (i = 0; i < alphabet.length; i++) {
        if (userKey === alphabet[i]) {

            //check for duplicate letters
            if (!keyGuessed.includes(userKey)) {
                play(userKey, randKey); //run game
            }
        }
    }
}
```
Game function
```
// play function, starts game
function play(userKey, mewKey) {

    console.log("user: " + userKey + " mew: " + mewKey); //test
    keyGuessed.push(userKey);

    // you win, reset game
    if (mewKey === userKey) {
        wins++;
        reset();
        alert("You win!"); //test
    }

    // No guesses left, you lose, reset game
else if (guesses != 1) {
        console.log("Choose another letter");
        // change text of guesses and keys pressed
        guesses--;
        guessesText.textContent = guesses;
        keyText.textContent = keyGuessed;
    }

    // guess again
    else {
        losses++;
        reset();
        alert("You lost"); //test
    }
}
```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- Learned to use arrays and look through them
- Learned to create functions
- Learned to execute code on keypress
- Learned to implement JavaScript

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Andrew Ton](https://github.com/atton88)

# License
Standard MIT License