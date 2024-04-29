function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return 0;
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return 1;
    }

    return -1;
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const roundList = document.createElement('li');
    const roundText = document.createElement('span');

    finalScore.textContent = ""
    match.textContent = `${capitalizeFirstLetter(playerSelection)}   x   
                        ${capitalizeFirstLetter(computerSelection)}`;
    if (result > 0) {
        matchResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerPoints++;
        roundText.textContent = `#${matchCounter + 1}: win 😀`
    } else if (result < 0) {
        matchResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints++;
        roundText.textContent = `#${matchCounter + 1}: lose 😭`
    } else {
        matchResult.textContent = `It's a tie!`;
        roundText.textContent = `#${matchCounter + 1}: tie 😐`
    }

    roundList.appendChild(roundText);
    list.appendChild(roundList);

    matchCounter++;
    if (matchCounter === 5) {
        displayFinalResult();
        playerPoints = 0;
        computerPoints = 0;
        matchCounter = 0;
        imgRock.removeEventListener("click", rockClick);
        imgPaper.removeEventListener("click", paperClick);
        imgScissors.removeEventListener("click", scissorsClick);
        const restartButton = document.createElement('button');
        restartButton.textContent = "Restart!";
        restartGame.appendChild(restartButton);
    } else {
        chooseCalling.textContent = `Round #${matchCounter + 1} - Choose your weapon!`
    }

}

function displayFinalResult() {
    if (playerPoints > computerPoints) {
        finalScore.textContent = `You won the Best of 5! # Winnings: ${playerPoints} rounds`;
    } else if (computerPoints > playerPoints) {
        finalScore.textContent = `You lost the Best of 5! # Losings: ${computerPoints} rounds`;
    } else {
        finalScore.textContent = `It's a tie!`;
    }
}

function rockClick() {
    playGame("rock");
}

function paperClick() {
    playGame("paper");
}

function scissorsClick() {
    playGame("scissors");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let playerPoints = 0;
let computerPoints = 0;
let matchCounter = 0;

const imgRock = document.querySelector("#imgRock");
const imgPaper = document.querySelector("#imgPaper");
const imgScissors = document.querySelector("#imgScissors");
const list = document.querySelector('ul');
const restartGame = document.querySelector('#restartGame')

const chooseCalling = document.querySelector("#chooseCalling");
const finalScore = document.querySelector("#finalScore");
const matchResult = document.querySelector("#matchResult");
const match = document.querySelector("#match");

imgRock.addEventListener("click", rockClick);
imgPaper.addEventListener("click", paperClick);
imgScissors.addEventListener("click", scissorsClick);

restartGame.addEventListener("click", () => {
    restartGame.innerHTML = ""; // Clear restart button
    list.innerHTML = ""; // Clear previous list of results
    finalScore.innerHTML = "";
    matchResult.innerHTML = "";
    chooseCalling.textContent = "Round #1 - Choose your weapon!"
    match.textContent = "";
    imgRock.addEventListener("click", rockClick);
    imgPaper.addEventListener("click", paperClick);
    imgScissors.addEventListener("click", scissorsClick);
});
