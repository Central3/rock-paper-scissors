const validChoices = ["rock", "paper", "scissors"];

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
        return 0;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (computerSelection === "rock" && playerSelection === "scissors")
    ) {
        return 1;
    } else if (playerSelection === computerSelection) {
        // console.log("Tie!");

        // playerSelection = prompt("Enter your choice: ").toLowerCase();
        // computerSelection = getComputerChoice();
        // return playRound(playerSelection, computerSelection);
        return 2;
    } else {
        return 3;
    }
}

// Play 5 rounds of game and decide who the winner is by the end
// of the game by updating their scores.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Enter your choice: ");
        if (playerSelection) {
            playerSelection = playerSelection.toLowerCase();
        }

        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            console.log(
                `You Win! ${
                    playerSelection[0].toUpperCase() + playerSelection.slice(1)
                } beats ${
                    computerSelection[0].toUpperCase() +
                    computerSelection.slice(1)
                }`
            );
            playerScore++;
        } else if (result === 1) {
            console.log(
                `You Lose! ${
                    computerSelection[0].toUpperCase() +
                    computerSelection.slice(1)
                } beats ${
                    playerSelection[0].toUpperCase() + playerSelection.slice(1)
                }`
            );
            computerScore++;
        } else if (result === 2) {
            console.log("Tie");
            round--;
        } else if (result === 3) {
            console.log("Wrong choice");
            round--;
        }
        console.log(round);
        console.log(playerScore, computerScore);
    }

    if (playerScore > computerScore) {
        console.log("Player Won!");
    } else {
        console.log("Computer Won!");
    }
}

// game();
