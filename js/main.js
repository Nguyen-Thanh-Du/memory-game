// --------------------------------------------------
// main.js — Core Game Logic
// --------------------------------------------------

// === 1️⃣ DOM References ===
const gameBoard = document.getElementById('gameBoard');
const moveCountEl = document.getElementById('moves-count');
const timerEl = document.getElementById('timer');
const restartBtn = document.getElementById('restartBtn');

// === 2️⃣ Game State Variables ===
let firstCard = null;          // first selected card
let secondCard = null;         // second selected card
let lockBoard = false;         // prevents interaction during animations
let moves = 0;                 // total move count
let time = 0;                  // total seconds elapsed
let timerInterval = null;      // interval reference for the timer
let currentCards = [];         // holds the active shuffled deck

// --------------------------------------------------
// Deck Creation + Rendering
// --------------------------------------------------

/**
 * Create a shuffled deck (two copies of each card).
 */
function createDeck() {
  return shuffle([...cardData, ...cardData]);
}

/**
 * Render a given deck onto the board and attach flip listeners.
 */
function generateCards(cardArray) {
  gameBoard.innerHTML = ''; // clear previous cards

  cardArray.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.name = card.name;

    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${card.img}" alt="${card.name}">
        </div>
        <div class="card-back">
          <img src="assets/img/back.png" alt="back">
        </div>
      </div>
    `;

    gameBoard.appendChild(cardElement);
  });

  // attach flip behavior
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => card.addEventListener('click', handleFlip));
}

// Initial deck setup
currentCards = createDeck();
generateCards(currentCards);

// --------------------------------------------------
// Card Flip + Match Logic
// --------------------------------------------------

/**
 * Handle a single card click.
 * Controls flipping, move counting, and match checking.
 */
function handleFlip() {
  if (lockBoard || this === firstCard) return;

  // start timer on very first flip
  if (!timerInterval) startTimer();

  // show this card
  this.classList.add('flip');

  // store first and second cards
  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;

  // update move count
  moves++;
  moveCountEl.textContent = moves;

  // evaluate match
  checkForMatch();
}

/**
 * Compare the two flipped cards for a match.
 */
function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

/**
 * Permanently disable matched cards and check for win condition.
 */
function disableCards() {
  firstCard.removeEventListener('click', handleFlip);
  secondCard.removeEventListener('click', handleFlip);

  resetBoard();
  checkWin();
}

/**
 * Flip back unmatched cards after a short delay.
 */
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

/**
 * Clear temporary selections and unlock the board.
 */
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

// --------------------------------------------------
// Timer System
// --------------------------------------------------

/**
 * Start counting seconds and update the display.
 */
function startTimer() {
  if (timerInterval) return; // prevent multiple timers
  timerInterval = setInterval(() => {
    time++;
    timerEl.textContent = `${time}s`;
  }, 1000);
}

/**
 * Stop the timer and clear interval reference.
 */
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// --------------------------------------------------
// Win Condition
// --------------------------------------------------

/**
 * Check if all cards are matched and handle victory.
 */
function checkWin() {
  const matchedCards = document.querySelectorAll('.card.flip');
  if (matchedCards.length === currentCards.length) {
    stopTimer();
    setTimeout(() => {
      alert(`You won in ${moves} moves and ${time} seconds!`);
    }, 300);
  }
}

// --------------------------------------------------
// Restart System
// --------------------------------------------------

/**
 * Restart the game without reloading the page.
 * Resets all counters, timer, and board content.
 */
restartBtn.addEventListener('click', restartGame);

function restartGame() {
  // stop any running timer
  stopTimer();

  // reset stats
  time = 0;
  moves = 0;
  timerEl.textContent = `${time}s`;
  moveCountEl.textContent = moves;

  // clear selections
  resetBoard();

  // generate a new shuffled deck
  currentCards = createDeck();
  generateCards(currentCards);
}
