var userChoice;
var randomNumber;
var computerChoice;

userChoice = prompt("Heads or Tails");

var randomNumber = Math.floor(Math.random()*2);
 if (randomNumber == 1) {computerChoice = "Heads"}
else {computerChoice = "Tails"}

if (userChoice == computerChoice) 
{alert ("You guessed right! The coin flip landed on " +userChoice)
} else {alert ("Sorry, the coin flip landed on " +computerChoice)}