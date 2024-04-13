# Rock, Paper, Scissors Game

This repository contains a simple implementation of the classic game "Rock, Paper, Scissors" in JavaScript. This exercise is part of [The Odin Project](https://www.theodinproject.com/), an open-source community aimed at guiding individuals from beginner to advanced levels in full-stack development.

# How to Play

To play the game, simply run the playGame() function. The game consists of five rounds where you compete against the computer. Each round, you will be prompted to enter your choice: rock, paper, or scissors. The computer will randomly select its choice. The winner of each round is determined based on the classic rules: rock beats scissors, scissors beats paper, and paper beats rock. If both the player and the computer make the same choice, it's a tie.

After five rounds, the game will announce the winner based on the number of rounds won by each player. If you win more rounds than the computer, you win the best of five series.

# Code Overview

* getComputerChoice(): This function generates a random choice for the computer: rock, paper, or scissors.
* playRound(playerSelection, computerSelection): This function simulates a single round of the game. It compares the player's selection with the computer's selection and determines the winner.
* playGame(): This function orchestrates the game flow. It loops through five rounds, prompts the player for input, calls playRound() to determine the winner, and keeps track of points.
* gameResult: The main script executes the game and announces the winner of the best of five series.

# Running the Game

To run the game, simply include this JavaScript code in your environment and execute it. Make sure you have a JavaScript runtime environment available, such as a web browser console or Node.js.

Feel free to customize or extend the game as you see fit! Happy gaming! 🎮
