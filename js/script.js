console.log("Hello World!")

/**machine chooses a random weapon
 * define rules of the game
 *  User inputs a weapon
 
 compare both weapons
 console returns who won
 */

 let getComputerChoice = Math.random() * 10 + 1;
 
 for (getComputerChoice;;) {
    if (getComputerChoice < 4){
        getComputerChoice = 'scissors';
    }
    else if (getComputerChoice < 7){
        getComputerChoice = 'paper';
    }
    else if (getComputerChoice < 11) {
        getComputerChoice = 'rock';
    }
    else {
        getComputerChoice == 'scissors'
    }
    console.log(getComputerChoice)
    break;
 }
 