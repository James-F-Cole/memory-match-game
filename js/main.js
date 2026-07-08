// ==================================================================================
// DOM EVENTS

const restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", restartGame);
const easyButton = document.querySelector("#easy-btn");
const mediumButton = document.querySelector("#medium-btn");
const hardButton = document.querySelector("#hard-btn");

easyButton.addEventListener("click", () => {
    changeDifficulty(DIFFICULTIES.easy);
});

mediumButton.addEventListener("click", () => {
    changeDifficulty(DIFFICULTIES.medium);
});

hardButton.addEventListener("click", () => {
    changeDifficulty(DIFFICULTIES.hard);
});

const GAME = {
    movesDisplay: document.querySelector("#moves"),
    timerDisplay: document.querySelector("#timer"),
    scoreDisplay: document.querySelector("#score"),
    gameBoard: document.querySelector(".game-board"),
    cardArray: [],
    stats: {
        matches: 0,
        misses: 0,
        totalPairs: getTotalPairs(),
        score: 0
    }
}; 
// ==================================================================================
// CARD LOGIC

function startGameIfNeeded() {
    if (!STATE.gameStarted) {
        STATE.gameStarted = true;
        startTimer();
        // playSound(AUDIO.background);
        // playSound(AUDIO.timer);
    }
}

function handleCardSelection(clickedCard) {
    if (STATE.lockBoard === true || clickedCard === STATE.firstCard) {
        return;
    }
    clickedCard.classList.add("flipped");
    // playSound(AUDIO.flip);
    if (!STATE.firstCard) {
        STATE.firstCard = clickedCard;
        return;
    }
    STATE.lockBoard = true;
    STATE.secondCard = clickedCard;
    STATE.moves++;
    updateMovesDisplay();
    checkForMatch();
}

function flipCard() {
    startGameIfNeeded();
    handleCardSelection(this);
}

function isMatched() {
    return STATE.firstCard.dataset.value === STATE.secondCard.dataset.value;
}

function handleMatch() {
    // playSound(AUDIO.match);
    STATE.matchedPairs++;
    GAME.stats.matches++;
    calculateScore();
    setTimeout(() => {
        STATE.firstCard.classList.add("matched");
        STATE.secondCard.classList.add("matched");
        resetTurn();
    }, CONFIG.ui.flipDelay);

    STATE.firstCard.removeEventListener("click", flipCard);
    STATE.secondCard.removeEventListener("click", flipCard);
    checkForWin();
}

function handleMismatch() {
    // playSound(AUDIO.mismatch);
    GAME.stats.misses++;
    calculateScore();
    setTimeout(() => {
        STATE.firstCard.classList.remove("flipped");
        STATE.secondCard.classList.remove("flipped");
        resetTurn();
    }, CONFIG.ui.flipDelay);
}

function checkForMatch() {
    if (isMatched()) {
        handleMatch();
    } else {
        handleMismatch();
    }
}
// ================================================================================
// GAME CONTROL
function resetTurn() {
    STATE.firstCard = null;
    STATE.secondCard = null;
    STATE.lockBoard = false;
}

function resetStats() {
    GAME.stats.matches = 0;
    GAME.stats.misses = 0;
    GAME.stats.score = 0;
}
function restartGame() {
    // playSound(AUDIO.restart);
    resetStats()
    resetGameState();
    GAME.gameBoard.innerHTML = "";
    
    initializeGame();
}
// =======================================================================
// UTILITY FUNCTIONS

function checkForWin() {
    if (STATE.matchedPairs === getTotalPairs()) {
        clearInterval(STATE.timerInterval);
        setTimeout(() => {
            // playSound(AUDIO.win);
            alert("You win!");
        }, 1100);
    }
}

function calculateScore() {
    const matchPoints = GAME.stats.matches * 100;
    const missPenalty = GAME.stats.misses * 10;

    GAME.stats.score = Math.max(0, matchPoints - missPenalty);

    GAME.scoreDisplay.textContent = GAME.stats.score;
}

function calculateAccuracy() {
    const attempts = GAME.stats.matches + GAME.stats.misses;

    if (attempts === 0) {
        return 0;
    }

    return Math.round(
        (GAME.stats.matches / attempts) * 100
    );
}
// =======================================================================
// INITIALIZATION

function initializeGame() {
    shuffleCards();
    createBoard();
    resetDisplay();
}

initializeGame();