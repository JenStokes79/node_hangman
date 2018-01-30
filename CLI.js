
var inquirer = require('inquirer');
var Word = require('./Word.js');
var wordArray = require('./wordarray.js')

var prompt = require('prompt');





inquirer.prompt([
{	type: "input",
	message: "User, what is your name?",
	name: "username"
},

{	type: "Confirm",
	message: "Would you like to play a game?",
	name: "confirm",
	default: true
}
]).then(function(inquirerResponse){
	if(inquirerResponse.confirm === true){
		console.log(inquirerResponse.username + ", " + "Welcome to Festival Hangman");
		 var game = new Game();
		game.play();
		game.grabWord();
		console.log("Please choose a letter")

	}else {
		console.log("\nOK... maybe next time. Bye");
	}
});




function Game() {
	var self = this;
	//console.log("self", self);

	this.play = function() {
		this.guessCount = 10;
	};

	this.grabWord = function() { 
		var selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];
		console.log("selectedWord", selectedWord);
		this.currentWord = new Word(selectedWord);
	};


}







