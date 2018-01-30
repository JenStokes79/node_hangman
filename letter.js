


var Letter = function(ltr){
	this.letter = ltr;
	this.show = false; 
	this.correctGuess = function(){
		if(this.letter == ' '){
			this.show = true;
			return ' ';
		}if(this.show === false){
			return ' _ ';
		}else{
			return this.letter;
		}
	}
		
}



module.exports = Letter;




// var array = require('./wordarray.js');

// function Word(randWord){

// 	this.letters = randWord.split('')
// 	var underscores = []
// 	for(var i = 0; i < this.letters.length; i++){
// 		underscores.push(' _ ')
// 	}

// 	var blankWord = underscores.join('');
// 	console.log('blankWord', blankWord);
// }
