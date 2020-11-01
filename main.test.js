const { test, expect } = require('@jest/globals');
const computerPlay = require('./main');
const playRound = require('./main');

test('Computer chooses randomly a value', () => {
    let values = ["rock", "paper", "scissors"];
    expect(values).toContain(computerPlay());
});

test('Rock wins to scissors', () => {
    playerSelection = 'rock';
    computerSelection = 'scissors';
    playerCounter = 0;
    expect(playRound('rock', 'scissors')).toBe('Player wins! Rock beats Scissors');
    expect(playerCounter).toBe(1);
});
