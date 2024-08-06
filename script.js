'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) displayMessage('🛑 No number!');
  if (guess === secretNumber) {
    displayMessage('🏆 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  };
  if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
  };
  if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess < secretNumber ? '⬇ Too low!' : '⬆ Too high!');
    } else {
      displayMessage("👻 You've lost the game!");
      document.querySelector('.score').textContent = '0';
    }
  };
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
