// Get user input (choice)
// Call getComputerChoice()
// Call playRound(playerSelection, computerSelection)

// Get user input
let playerSelection = prompt('Enter your choice: ');

// make random choice on behalf of the computer
function getComputerChoice() {
  // Determine a random number between 0 and 2
  // set 0 to rock
  // set 1 to paper
  // set 2 to scissors
  // Return the choice

  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomNumber === 0) computerChoice = 'rock';
  else if (randomNumber === 1) computerChoice = 'paper';
  else computerChoice = 'scissors';

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // if playerSelection equals rock and computerSelection equals scissors
    // palyer wins
  // if playerSelection equals paper and computerSelection equals rock
    // player wins
  // if playerSelection equals scissors and computerSelection equals paper
    // player wins


  // if playerSelection equals scissors and computerSelection equals rock
    // computer wins
  // if playerSelectoin equals rock and computerSelection equals paper
    // computer wins
  // if plaeyrSelection equals paper and computerselection equls scissors
    // computer wins


    // if playerselection equals computerselection
        // tie 
        // call playRound()
}
