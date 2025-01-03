'use strict';

const scoreOne = document.querySelector('#score--0');
const scoreTwo = document.querySelector('#score--1');

const currentOne = document.querySelector('#current--0');
const currentTwo = document.querySelector('#current--1');

const dice = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonDiceRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');


let cpOne = 0;
let cpTwo = 0;
let player = 1;
let playerScoreOne = 0;
let playerScoreTwo = 0;
scoreOne.textContent = playerScoreOne;
scoreTwo.textContent = playerScoreTwo;

const diceRoll = function () {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log('button roll cliked', dice.src = `dice-${diceValue}.png`, diceValue);
   
    if (player === 1) {
        if (diceValue == 1) {
            player = 2;
            cpOne = 0;
            diceValue = 0;
            playerOne.classList.remove('player--active');
        }
        cpOne = cpOne + diceValue;
        console.log(typeof cpOne, typeof diceValue);
        if (!playerOne.classList.contains('player--active')) {
            playerOne.classList.add('player--active');
        }
    } else if (player === 2) {
        if (diceValue == 1) {
            player = 1;
            cpTwo = 0;
            diceValue = 0;
            playerTwo.classList.remove('player--active')
        }
        cpTwo = cpTwo + diceValue;
        if (!playerTwo.classList.contains('player--active')) {
            playerTwo.classList.add('player--active');
        }
      
    }
    currentOne.textContent = cpOne;
    currentTwo.textContent = cpTwo;
}

buttonDiceRoll.addEventListener('click', diceRoll);

buttonHold.addEventListener('click', function () {
    if (player == 1) {
        playerScoreOne = playerScoreOne + cpOne;
        if (playerScoreOne >= 100) {
            playerOne.classList.add('player--winner');
        }
        cpOne = 0;
        player = 2;
        playerOne.classList.remove('player--active')
        if (!playerTwo.classList.contains('player--active')) {
            playerTwo.classList.add('player--active');
        }
        
    }
    else {
        playerScoreTwo = playerScoreTwo + cpTwo;
        if (playerScoreTwo >= 100) {
            playerTwo.classList.add('player--winner');
        }
        cpTwo = 0;
        player = 1;
        playerTwo.classList.remove('player--active')
        if (!playerOne.classList.contains('player--active')) {
            playerOne.classList.add('player--active');
        }
    
    }
    scoreOne.textContent = playerScoreOne;
    scoreTwo.textContent = playerScoreTwo;
    currentOne.textContent = cpOne;
    currentTwo.textContent = cpTwo;
})

buttonNewGame.addEventListener('click', function () {
    cpOne = 0;
    cpTwo = 0;
    player = 1;
    playerScoreOne = 0;
    playerScoreTwo = 0;
    scoreOne.textContent = playerScoreOne;
    scoreTwo.textContent = playerScoreTwo;
    currentOne.textContent = cpOne;
    currentTwo.textContent = cpTwo;
    if (playerOne.classList.contains('player--winner')) {
        playerOne.classList.remove('player--winner');
    }
    if (playerTwo.classList.contains('player--winner')) {
        playerTwo.classList.remove('player--winner');
    }
})

