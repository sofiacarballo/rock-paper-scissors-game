let values = ["rock", "paper", "scissors"];
let playerCounter = 0;
let computerCounter = 0;

function computerPlay() {
  let computerSelection = values[Math.floor(Math.random() * values.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie round";
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    playerCounter++;
    return "Player wins! Paper beats Rock";
  }

  if (playerSelection === "scissors" && computerSelection === 'paper') {
    playerCounter++;
    return "Player wins! Scissors beats Paper";
  }
  
  if (playerSelection === "rock" && computerSelection === 'scissors') {
    playerCounter++;
    return "Player wins! Rock beats Scissors";
  }

  computerCounter++;
  return "Computer wins!";
}
 
function game() {
  var roundCounter;

  for (roundCounter = 0; roundCounter < 5; roundCounter++) {
    var playerSelection = (prompt("Rock, paper or scissors?"));
    roundResult = playRound(playerSelection, computerPlay());
    console.log(roundResult);
    console.log('Computer: '+ computerCounter + '\n' + 'Player: ' + playerCounter)
  }

  if (playerCounter > computerCounter) {
    return 'Player wins!'
  }
  if (computerCounter > playerCounter) {
    return 'Computer wins'
  }
  return 'Tie game'
}

module.exports = computerPlay, playRound;