console.log("Hello World!")

/**machine chooses a random weapon
 * User inputs a weapon
 * define rules of the game
 
 compare both weapons
 console returns who won
 */

let getComputerChoice = Math.random() * 10 + 1;
let computerChoice;

if (getComputerChoice < 4){
   computerChoice = 'scissors';
} else if (getComputerChoice < 7) {
   computerChoice = 'paper';
} else {
   computerChoice = 'rock';
}
console.log(computerChoice);

let playerInput = prompt('Choose your weapon');
let playerChoice = playerInput.toLowerCase();

let playerScore = 0;
let computerScore = 0;
 
function playRound(playerChoice, computerChoice) {
   if ((playerChoice === 'scissors') && (computerChoice === 'rock')) {
      return computerScore += 1, "You lost, rock beats scissors";
    }
   else if ((playerChoice === 'rock') && (computerChoice === 'paper')) {
      return computerScore += 1, "You lose fool, paper beats rock!"
    }
   else if ((playerChoice === 'paper') && (computerChoice=== 'scissors')) {
      return computerScore += 1, "You lost!!!!! SCISSORS BEAT PAPER DON'T YOU REMEMBER?";
    }
   else if ((playerChoice === 'scissors') && (computerChoice === 'paper')) {
      return playerScore += 1, "You won, unbelievable... scissors > paper"
        }
   else if ((playerChoice === 'rock') && (computerChoice === 'scissors')) {
      return playerScore += 1, "You're lucky, rock beats scissors this time"
        }
   else if ((playerChoice === 'paper') && (computerChoice === 'rock')) {
      return playerScore += 1, "You won lol... p>r";
        
    }
   else if ((playerChoice === 'scissors' && computerChoice === 'scissors')) {
      return "Scissors clash and both enjoy it, but none wins"
    }
   else if ((playerChoice === 'rock') && computerChoice === 'rock') {
      return "the rocks break when they collide with the strength of a thousand horses. Both get destroyed, and both lose, that's a tie afterall"
   }
   else if ((playerChoice === 'paper') && computerChoice === 'paper') {
      return "you suck, paper vs paper = tie; do better"
   }
   else {
      return "I BEG YOU ENTER A SUITABLE WEAPON, PLEASE. PLEASE"
   }
}

function game(i) {
   for (i = 1; i < 5; i++) {
      return playRound(playerChoice, computerChoice)
   }
}


/** player is asked for a weapon
machine is asked for a weapon
compare the weapons
alert the result and add 1 to the scoreboard
reset and make another round
loop four times
alert the result of the match **/
