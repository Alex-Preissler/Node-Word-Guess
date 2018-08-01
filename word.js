var letters = require('./letter.js');

//Possible bands.
var bands={
    
    1: {name: "Blink 182"}, 
    
    2: {name: "Green Day"},
   
    3: {name: "Rage Against The Machine"},
    
    4: {name: "Foo Fighters"},
   
    5: {name: "Eve 6"},
    
    6: {name: "311"},
    
    7: {name: "Red Hot Chili Peppers"},
   
    8: {name: "The Offspring"},
    
    9: {name: "Nine Inch Nails"},
    
    10: {name: "Weezer"} ,
    
    11: {name: "Bush"},
    
    12: {name: "Filter"},
    
    13: {name: "Stone Temple Pilots"}, 
    
    14: {name: "Nirvana"}
};

//selects band and creates array of objects for each letter.
var select = function selectWord() {

    band = bands[Math.floor((Math.random() * 14)) + 1];

    var letterArray = [];

    var word = band.name;
    word = word.split("");

    for(var i=0; i<word.length; i++){

        var thisLetter = word[i];

        letterArray[i] = new letters(thisLetter, false);
        
    }
return(letterArray);
};

//displays blanks or letters based on user guess.
var display = function(letterArray){

    var wordString = letterArray[0].letterReturn();

    for(var i=1; i<letterArray.length; i++){
        
        var displayValue = letterArray[i].letterReturn();

        wordString += displayValue;

    }

    console.log(wordString + "\n");

};

//checks user guess.
var guess = function(guess, letterArray){

    var anyCorrect = false;

    for(var i=0; i<letterArray.length; i++){
    
        var correct =  letterArray[i].check(guess);
        
        if(correct === true){
            anyCorrect = true;
        }

    }
    return(anyCorrect);
};

module.exports.control = {
    select,
    display,
    guess
};