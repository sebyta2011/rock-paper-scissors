function computerChoiceF() {
   let getComputerChoice = Math.random() * 10 + 1;
   let computerChoice = 'rock';
   if (getComputerChoice < 4) {
      computerChoice = 'scissors';
      return computerChoice;
   }
   else if (getComputerChoice < 7) {
      computerChoice = 'paper';
      return computerChoice;
   }
   else if (getComputerChoice < 11) {
      computerChoice = 'rock';
      return computerChoice;
   }
   else {
      return computerChoice;
   }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
   let computerChoice = computerChoiceF();
   if ((playerChoice == 'scissors') && (computerChoice == 'rock')) {
      return computerScore += 1, "You lost, rock beats scissors"
   }
   else if ((playerChoice == 'rock') && (computerChoice == 'paper')) {
      return computerScore += 1, "You lose fool, paper beats rock!"
   }
   else if ((playerChoice == 'paper') && (computerChoice == 'scissors')) {
      return computerScore += 1, "You lost!!!!! SCISSORS BEAT PAPER DON'T YOU REMEMBER?"
   }
   else if ((playerChoice == 'scissors') && (computerChoice == 'paper')) {
      return playerScore += 1, "You won, unbelievable... scissors > paper"
   }
   else if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
      return playerScore += 1, "You're lucky, rock beats scissors this time"
   }
   else if ((playerChoice == 'paper') && (computerChoice == 'rock')) {
      return playerScore += 1, "You won lol... p>r"
   }
   else if ((playerChoice == 'scissors' && computerChoice == 'scissors')) {
      return "Scissors clash and both enjoy it, but none wins"
   }
   else if ((playerChoice == 'rock') && (computerChoice == 'rock')) {
      return "the rocks break when they collide with the strength of a thousand horses. Both get destroyed, and both lose, that's a tie afterall"
   }
   else if ((playerChoice == 'paper') && (computerChoice == 'paper')) {
      return "you suck, paper vs paper = tie; do better"
   }
   else {
      console.log(playerChoice)
      return "I BEG YOU ENTER A SUITABLE WEAPON, PLEASE. PLEASE";
   }
   
}

function game() {
   const resultContainer = document.querySelector('#resultContainer')
   const resultTextCont = document.querySelector('.resultText')
   let resultText='';

   if(playerScore == 5) {
      return playerScore = 0, computerScore = 0, resultText = "YOU WIN, UNBELIVABLE",
      resultTextCont.textContent = resultText;
   }
   else if(computerScore == 5) {
      return playerScore = 0, computerScore =0, resultText = "YOU'RE THRASH",
      resultTextCont.textContent = resultText;
   }
   else {
      resultText = `Your score is ${playerScore}, comptuer score is ${computerScore}`
   }
   resultTextCont.textContent = resultText;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
   button.addEventListener('click', function(e) {
      const buttonClass = this.classList.value;
      let playerChoice = buttonClass;
      console.log(playerChoice);
      console.log(playRound(playerChoice));
      game(playerScore, computerScore);
   });
});



// function game() {
//    if(playerScore == 5) {
//       return playerScore=0, computerScore=0, "You win!";
//    }
//    else if(computerScore == 5) {
//       return playerScore= 0, computerScore=0, "You lose!";
//    }
//    else {
//    }
// }