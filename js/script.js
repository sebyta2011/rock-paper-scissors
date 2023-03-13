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
    if ((playerChoice === 'scissors') && (computerChoice === 'rock') ||
    ((playerChoice === 'rock') && (computerChoice === 'paper')) ||
    ((playerChoice === 'paper') && (computerChoice=== 'scissors'))) {
        return "You lost";
    }
    else if 
        ((playerChoice === 'scissors') && (computerChoice === 'paper') ||
        (playerChoice === 'rock') && (computerChoice === 'scissors') ||
        (playerChoice === 'paper') && (computerChoice === 'rock')) {
            return "You won lol";
        
    }
    else {
        return 'tie lol';
    }

 }