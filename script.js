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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //No Input
  if (!guess) {
    document.querySelector('.message').textContent = '🤮 No number';
    //The right input
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = '🙌 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b34f';
    document.querySelector('.number').style.width = '30rem';

    //When Input is more than the random number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😮 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥵 GAME OVER';
    }

    //When Input is less than the right number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😒 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥵 GAME OVER';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset score

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
