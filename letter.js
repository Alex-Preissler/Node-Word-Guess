var letters = function(letter, correct){
    this.letter = letter,
    this.correct = correct,
    this.letterReturn = function(){
       
       if(this.letter != " "){
            if(this.correct === true){
                return(this.letter);
            }else{
                return('_');
            }
        }else{
            this.correct = true;
            return(" ");
        }
    },
    this.check = function(guess){

        var letter = this.letter;
        letter = letter.toLowerCase();
        
        if(guess === letter){
            this.correct = true;
            return(true);
        }else{
            return(false);
        }
    };
};

module.exports = letters;