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
   const roundResult = document.querySelector('.roundResult');
   let roundResultText = '';

   if ((playerChoice == 'scissors') && (computerChoice == 'rock')) {
      return computerScore += 1, roundResultText="You lost, rock beats scissors",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'rock') && (computerChoice == 'paper')) {
      return computerScore += 1, roundResultText="You lose fool, paper beats rock!",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'paper') && (computerChoice == 'scissors')) {
      return computerScore += 1, roundResultText="You lost!!!!! SCISSORS BEAT PAPER DON'T YOU REMEMBER?",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'scissors') && (computerChoice == 'paper')) {
      return playerScore += 1, roundResultText="You won, unbelievable... scissors > paper",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
      return playerScore += 1, roundResultText="You're lucky, rock beats scissors this time",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'paper') && (computerChoice == 'rock')) {
      return playerScore += 1, roundResultText="You won lol... p>r",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'scissors' && computerChoice == 'scissors')) {
      return roundResultText="Scissors clash and both enjoy it, but none wins",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'rock') && (computerChoice == 'rock')) {
      return roundResultText="the rocks break when they collide with the strength of a thousand horses. Both get destroyed, and both lose, that's a tie afterall",
      roundResult.textContent = roundResultText;
   }
   else if ((playerChoice == 'paper') && (computerChoice == 'paper')) {
      return roundResultText="you suck, paper vs paper = tie; do better",
      roundResult.textContent = roundResultText;
   }
   else {
      return roundResultText="SLOWER PLEASE I CAN'T PROCESS THIS MUCH INFORMATION",
      roundResult.textContent = roundResultText;
   }
   roundResult.textContent = roundResultText;
   
}

function game() {
   const resultTextCont = document.querySelector('.resultText')
   let resultText='';

   if(playerScore == 5) {
      return resultText = `YOU WIN, UNBELIVABLE ${playerScore}-${computerScore}`, resultTextCont.textContent = resultText, playerScore = 0, computerScore = 0;
   }
   else if(computerScore == 5) {
      return resultText = `YOU'RE THRASH ${playerScore}-${computerScore}`, resultTextCont.textContent = resultText,
      playerScore = 0, computerScore = 0;
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
      playRound(playerChoice);
      button.classList.toggle('playing');
      game(playerScore, computerScore);
   });
});

function removeTransition(e) {
   if(e.propertyName !== 'transform') return;
   this.classList.remove('playing');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));