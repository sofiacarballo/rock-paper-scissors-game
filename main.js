const values = ["rock", "paper", "scissors"];

let playerCounter = 0;
let computerCounter = 0;

const playerElection = document.getElementById('player-choice');
const computerElection = document.getElementById('computer-choice');

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

const player = document.getElementById('player');
const computer = document.getElementById('computer');

const roundResult = document.getElementById('round-result');

const winnerSection = document.getElementsByClassName('winner-section')
const finalWinner = document.getElementById('final-winner');

const body = document.getElementById('body')

const buttons = [...document.querySelectorAll('.button')]; 
const playButton = document.getElementById('play'); 
const restartButton = document.getElementById('restart')

choices = [playerElection, computerElection]

function computerPlay() {
  let computerSelection = values[Math.floor(Math.random() * values.length)];
  computer.textContent = computerSelection
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    result = "Tie round"
    return result;
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    playerCounter++;
    result = "Player wins! Paper beats Rock"
    return result;
  }

  if (playerSelection === "scissors" && computerSelection === 'paper') {
    playerCounter++;
    result = "Player wins! Scissors beats Paper"
    return result;
  }
  
  if (playerSelection === "rock" && computerSelection === 'scissors') {
    playerCounter++;
    result = "Player wins! Rock beats Scissors"
    return result;
  }

  computerCounter++;
  result = "Computer wins!"
  return result;
}
 
function displayScore() {
  playerScore.textContent = playerCounter;
  computerScore.textContent = computerCounter;
}

function changingDisplay(display, args) {
  let elements = Array.from(args).flat();
  elements.forEach((element) => {
    element.style.display = display;
  });  
}

function hideElement(...args) {
  changingDisplay('none', args);
}

function showElement(...args) {
  changingDisplay('block', args); 
}

function displayRound(playerChoice, roundResults) {
  showElement(choices);
  player.textContent = playerChoice;
  roundResult.textContent = roundResults;
  displayScore()
}

function displayWinner(winner) {
  hideElement(choices, body, buttons);
  showElement(finalWinner, restartButton);
  finalWinner.textContent = winner + ' won the game!';
}

function startGame() {
  return () => {
    clearCounters()
    clearDisplay()
    hideElement(choices, finalWinner, restartButton, playButton);
    showElement(buttons, body);
  };
}

function makeMovement(button) {
  return () => {
    playerChoice = button.id;
    computerChoice = computerPlay();
    roundResults = playRound(playerChoice, computerChoice);
    displayRound(playerChoice, roundResults)
    checkCounter();
  };
}

function checkCounter() {
  if (playerCounter == 3) {
    endGame('You');
  }
  if (computerCounter == 3) {
    endGame('Computer');
  }
}

function endGame(winner) {
  displayWinner(winner)
}

function restartGame() {
  startGame();
}

function clearCounters() {
  playerCounter = 0;
  computerCounter = 0;
  displayScore()
}

function clearDisplay() {
  player.textContent = ''
  computer.textContent = ''
  roundResult.textContent = ''
}

hideElement(body, restartButton);

playButton.addEventListener('click', startGame());
restartButton.addEventListener('click', startGame());

buttons.forEach((button) => {
  button.style.display = 'none' 
  button.addEventListener('click', makeMovement(button));
});


// module.exports = computerPlay, playRound;