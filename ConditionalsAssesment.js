var userChoice;
var randomNumber;
var computerChoice;
userChoice = prompt("Heads or Tails");

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   } console.log(getRandomInt(3));
//    console.log(getRandomInt(1));
//    console.log(Math.random());

randomNumber = Math.round(Math.random()*1) ;
if (computerChoice < 0.5) {
    var computerChoice = "Heads";
} else if (computerChoice = 1){ 
    var computerChoice = "Tails";
}
// Math.floor((Math.random() * 1) + 1);
// var y = Math.random();
// if (y < 0.5) {return  y = 0}
//  else {y= 1};

// let randomNumber = computerChoice

if (userChoice == computerChoice) 
{alert ("You guessed right! The coin flip landed on " +userChoice)
} else {alert ("Sorry, the coin flip landed on " +computerChoice)}