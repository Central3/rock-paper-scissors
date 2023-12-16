const validChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// make random choice on behalf of the computer
function getRandomChoice() {
    return validChoices[Math.floor(Math.random() * 3)];
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
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
const resultDisplay = document.querySelector(".result");
const computerScoreDisplay = document.querySelector(".computer_score");
const playerScoreDisplay = document.querySelector(".player_score");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal_btn");
const modalTxt = document.querySelector(".modal_text");

playerChoiceBtns.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {
        const playerSelection = event.target.className;

        const computerSelection = getRandomChoice();

        const oldComputerChoiceImg = document.querySelector(".computer_choice");
        const oldPlayerChoiceImg = document.querySelector(".player_choice");

        if (oldComputerChoiceImg) oldComputerChoiceImg.remove();
        if (oldPlayerChoiceImg) oldPlayerChoiceImg.remove();

        resultDisplay.textContent = playRound(
            playerSelection,
            computerSelection
        );
        computerScoreDisplay.textContent = computerScore;

        const computerChoiceImg = document.createElement("img");
        computerChoiceImg.setAttribute(
            "src",
            `./images/${computerSelection}.png`
        );
        computerChoiceImg.classList.add("computer_choice");
        computerScoreDisplay.parentElement.insertBefore(
            computerChoiceImg,
            computerScoreDisplay
        );

        playerScoreDisplay.textContent = playerScore;

        const playerChoiceImg = document.createElement("img");
        playerChoiceImg.setAttribute("src", `./images/${playerSelection}.png`);
        playerChoiceImg.classList.add("player_choice");
        playerScoreDisplay.parentElement.insertBefore(
            playerChoiceImg,
            playerScoreDisplay
        );

        if (isGameOver()) {
            decideWinner();
            resetGame();
        }
    }
});

modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
    resultDisplay.textContent = "";

    modal.style.display = "block";
}

function decideWinner() {
    if (playerScore > computerScore) {
        modalTxt.textContent = "You Win!";
    } else {
        modalTxt.textContent = "You Lose!";
    }
}
