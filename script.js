function getComputerChoice(){
    // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Use the random number to return 'Rock', 'Paper', or 'Scissors'
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
    // Convert both selections to lowercase for case-insensitive comparison
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player == computer) {
        return 0;
    }

    if (
        (player == "rock" && computer == "scissors") ||
        (player == "scissors" && computer == "paper") ||
        (player == "paper" && computer == "rock")
    ) {
        return 1;
    }

    return -1;

}

function playGame(){
    let playerSelection;
    let computerSelection;
    let playerPoints = 0;
    let computerPoints = 0;
    let result;

    for (let round = 1; round <= 5; round++) {
        playerSelection = prompt("What is your option? Rock, Paper or Scissors?")
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        if (result > 0) {
            console.log(`Round ${round}: You win! ${playerSelection} beats ${computerSelection}`);
            playerPoints ++;
        } else if (result < 0) {
            console.log(`Round ${round}: You lose! ${computerSelection} beats ${playerSelection}`);
            computerPoints ++;
        } else {
            console.log(`Round ${round}: It's a tie!`);
        }
    }

    return [playerPoints, computerPoints];

}

let gameResult = playGame();
if (gameResult[0] > gameResult[1]){
    console.log(`You won the Best of 5! # Winnings: ${gameResult[0]} rounds`);
} else {
    console.log(`You lose the Best of 5! # Winnings: ${gameResult[0]} rounds`);
}