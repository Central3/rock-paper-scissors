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
    return `You Win! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    return `You Lose! ${
      computerSelection[0].toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
  } else if (playerSelection === computerSelection) {
    console.log("Tie!");

    playerSelection = prompt("Enter your choice: ").toLowerCase();
    computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
  } else {
    return "Wrong choice";
  }
}

// Get user input
let playerSelection = prompt("Enter your choice: ").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
