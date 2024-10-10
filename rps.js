let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; 
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();  // Call the function to get the computer choice

    let resultMessage = '';

    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                computerScore++;
                resultMessage = "You lose! Paper beats Rock.";
            } else if (computerChoice === "scissors") {
                humanScore++;
                resultMessage = 'You win! Rock beats Scissors.';
            } else {
                resultMessage = 'It is a draw. You both chose Rock.';
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                humanScore++;
                resultMessage = 'You win! Paper beats Rock.';
            } else if (computerChoice === 'scissors') {
                computerScore++;
                resultMessage = 'You lost! Scissors beat Paper.';
            } else {
                resultMessage = 'It\'s a draw. You both chose Paper.';
            }
            break;
        case 'scissors':
            if (computerChoice === 'rock') {
                computerScore++;
                resultMessage = 'You lost! Rock beats Scissors.';
            } else if (computerChoice === 'paper') {
                humanScore++;
                resultMessage = 'You won! Scissors beat Paper.';
            } else {
                resultMessage = 'It is a draw. You both chose Scissors.';
            }
            break;
        
    }
    let resultOne = document.querySelector('.result');
    resultOne.textContent = resultMessage;

    let score = document.getElementById("score")
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

}

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

rockButton.addEventListener('click',function() {
    playRound("rock"); 
});
paperButton.addEventListener('click',function() {
    playRound("rock");
});
scissorsButton.addEventListener('click',function() {
    playRound("scissors");
});