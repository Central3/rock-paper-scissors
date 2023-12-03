/*
  Get user input (choice)
  Call getComputerChoice()
  Call playRound(playerSelection, computerSelection) 
*/

// make random choice on behalf of the computer
function getComputerChoice() {
  // Determine a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  // set 0 to rock, set 1 to paper, set 2 to scissors
  if (randomNumber === 0) computerChoice = "rock";
  else if (randomNumber === 1) computerChoice = "paper";
  else computerChoice = "scissors";

  return computerChoice;
}

// A single round of rock paper scissors decides who wins
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "Tie!";
  } else {
    return "Wrong choice";
  }
}

// Get user input
let playerSelection = prompt("Enter your choice: ");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
