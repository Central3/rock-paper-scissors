const validChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// make random choice on behalf of the computer
function getComputerChoice() {
    // Determine a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    // set 0 to rock, set 1 to paper, set 2 to scissors
    return validChoices[randomNumber];
}

// A single round of rock paper scissors decides who Wins or Loses
// Replay the round if in case of a Tie
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors")
    ) {
        playerScore++;
        return "You win!";
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (computerSelection === "rock" && playerSelection === "scissors")
    ) {
        computerScore++;
        return "Computer Wins!";
    } else if (playerSelection === computerSelection) {
        return "Tie!";
    }
}

const playerChoiceBtns = document.querySelector(".options");
const playerChoiceDisplay = document.querySelector(".player_choice");
const computerChoiceDisplay = document.querySelector(".computer_choice");
const resultDisplay = document.querySelector(".result");
const computerScoreDisplay = document.querySelector(".computer_score");
const playerScoreDisplay = document.querySelector(".player_score");

playerChoiceBtns.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        const playerSelection = event.target.className;
        playerChoiceDisplay.textContent = playerSelection;

        const computerSelection = getComputerChoice();

        computerChoiceDisplay.textContent = computerSelection;
        resultDisplay.textContent = playRound(
            playerSelection,
            computerSelection
        );
        computerScoreDisplay.textContent = computerScore;
        playerScoreDisplay.textContent = playerScore;
    }
});
