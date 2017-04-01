var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
    guess = prompt('I am thinking of a number between 1 and 10 ')
    guess += 1;
  if (parseInt(guess) === randomNumber){

  }
} while ( ! correctGuess )

    document.write('<h1> You guessed the number! </h1>');
    document.write('It took you ' + guessCount +' tries to guess the number' + randomNumber)
