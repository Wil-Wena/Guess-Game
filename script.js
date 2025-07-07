'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = '13';
// document.querySelector('.number').textContent = '10';

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //No Input
  if (!guess) {
    displayMessage('🤮 No number');
    //The right input
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('🙌 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b34f';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When Input is more than the random number
  } else if (guess !== score) {
    if (score > 1) {
      displayMessage(guess > score ? '😮 Too High' : '😒 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥵 GAME OVER');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset score

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = '0';
});
