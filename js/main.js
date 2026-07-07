// ==================================================================================
// DOM EVENTS

const restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", restartGame);

const GAME = {
    movesDisplay: document.querySelector("#moves"),
    timerDisplay: document.querySelector("#timer"),
    gameBoard: document.querySelector(".game-board"),
    cardArray: [ ...CONFIG.symbols, ...CONFIG.symbols ] 
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


function restartGame() {
    // playSound(AUDIO.restart);
    resetGameState();
    GAME.gameBoard.innerHTML = "";
    initializeGame();
}

function checkForWin() {
    if (STATE.matchedPairs === GAME.cardArray.length / 2) {
        clearInterval(STATE.timerInterval);
        setTimeout(() => {
            // playSound(AUDIO.win);
            alert("You win!");
        }, 1100);
    }
}
// =======================================================================
// INITIALIZATION

function initializeGame() {
    shuffleCards();
    createBoard();
    resetDisplay();
}

initializeGame();