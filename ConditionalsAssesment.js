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

var birthYear
userChoice = prompt ("What year where you born in?")
birthYear = userChoice
if((2023 - birthYear) > 21) {
    alert ("You are old enough to drink in the US")
} else if ((2023 - birthYear) === 21) {
    alert ("You are old enough to drink in the US...barely")
} else if ((2023 - birthYear) < 21 ){
    alert ("Sorry, you are not old enough to drink in the US")
}
