var word = require('./word.js');
var inquirer = require('inquirer');
var guesses = 10;
var letterArray = [];
var wins = 0;
var losses = 0;

//Gets letter object array.
function getArray(){
    letterArray = word.control.select();
};

//main game loop.
function main(){

    console.log("Wins: " + wins + "   Losses: " + losses);
    console.log("Guesses Remaining: " + guesses + "\n");
    word.control.display(letterArray);

    if(guesses > 0){

        inquirer.prompt([
            {
            type: "input",
            message: "Guess a letter",
            name: "guess"
            }
        ]).then(function(answers){
            
            var guess = answers.guess;
            guess = guess.toLowerCase();

            if(guess === "exit"){
                return;
            }

            var correctGuess = word.control.guess(guess, letterArray);

            if(correctGuess === false){
                guesses--;
            }

            var check = winCheck();
            
            if(check === true){
                win();
            }else{    
                main();
            }

        });

    }else{
        losses++;
        console.log("\nGame Over!\n");
        return;
    }
};

//checks conditions to determine win.
function winCheck(){

    var win = true;

    for(var i=0; i<letterArray.length; i++){

        if(letterArray[i].correct === false){
            win = false;
        }else{

        }
    };

    if(win === true){
        return(true);
    }else{
        return(false);
    }
};

//adds a win and begins a new round.
function win(){
    wins++;
    word.control.display(letterArray);
    console.log('\nYou Win!\n');
    guesses = 10;
    getArray();
    main();
};

console.log("90's Rock Word Guess.")
console.log("Guess one letter at a time, press enter to sumbit your guess.");
console.log('Submit "exit" to end the game.');
getArray();
main();