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

 let playerInput = 'rock';
 let playerChoice = playerInput.toLowerCase();
 
 function game(playerChoice, computerChoice) {
   if ((playerChoice === 'scissors') && (computerChoice === 'rock')) {
      return "You lost, rock beats scissors"
    }
   else if ((playerChoice === 'rock') && (computerChoice === 'paper')) {
      return "You lose fool, paper beats rock!"
    }
   else if ((playerChoice === 'paper') && (computerChoice=== 'scissors')) {
      return "You lost!!!!! SCISSORS BEAT PAPER DON'T YOU REMEMBER?";
    }
   else if ((playerChoice === 'scissors') && (computerChoice === 'paper')) {
      return "You won, unbelievable... scissors > paper"
        }
   else if ((playerChoice === 'rock') && (computerChoice === 'scissors')) {
      return "You're lucky, rock beats scissors this time"
        }
   else if ((playerChoice === 'paper') && (computerChoice === 'rock')) {
      return "You won lol... p>r";
        
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