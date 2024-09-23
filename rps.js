let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; 
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice (rock, paper, or scissors): ");
    return userChoice;
}

function playRound() {
    let humanChoice = getHumanChoice();  // Call the function to get the human choice
    let computerChoice = getComputerChoice();  // Call the function to get the computer choice

    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                computerScore++;
                console.log("You lose! Paper beats Rock.");
            } else if (computerChoice === "scissors") {
                humanScore++;
                console.log('You win! Rock beats Scissors.');
            } else {
                console.log("It's a draw. You both chose Rock.");
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                humanScore++;
                console.log('You win! Paper beats Rock.');
            } else if (computerChoice === 'scissors') {
                computerScore++;
                console.log('You lost! Scissors beat Paper.');
            } else {
                console.log('It\'s a draw. You both chose Paper.');
            }
            break;
        case 'scissors':
            if (computerChoice === 'rock') {
                computerScore++;
                console.log('You lost! Rock beats Scissors.');
            } else if (computerChoice === 'paper') {
                humanScore++;
                console.log('You won! Scissors beat Paper.');
            } else {
                console.log('It\'s a draw. You both chose Scissors.');
            }
            break;
        default:
            console.log('Invalid choice. Please choose rock, paper, or scissors.');
    }

    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

// Play one round
playRound();