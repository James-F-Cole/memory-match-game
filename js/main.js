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
    difficultyDisplay: document.querySelector("#difficulty"),
    scoreDisplay: document.querySelector("#score"),
    bestScoreDisplay: document.querySelector("#best-score"),
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
        playSound(AUDIO.background);
        playSound(AUDIO.timer);
    }
}

function handleCardSelection(clickedCard) {
    if (STATE.lockBoard === true || clickedCard === STATE.firstCard) {
        return;
    }
    clickedCard.classList.add("flipped");
    playSound(AUDIO.flip);
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
    
    STATE.matchedPairs++;
    incrementMatches();
    calculateScore();
    setTimeout(() => {
        playSound(AUDIO.match);
        STATE.firstCard.classList.add("matched");
        STATE.secondCard.classList.add("matched");
        resetTurn();
    }, CONFIG.ui.flipDelay);

    STATE.firstCard.removeEventListener("click", flipCard);
    STATE.secondCard.removeEventListener("click", flipCard);
    checkForWin();
}

function handleMismatch() {
    
    incrementMisses();
    calculateScore();
    setTimeout(() => {
        playSound(AUDIO.mismatch);
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
    playSound(AUDIO.restart);
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

        const isNewBest = saveBestScore(CURRENT_DIFFICULTY.id, GAME.stats.score);

        addLeaderboardEntry({
            player: STATE.playerName,
            difficulty: CURRENT_DIFFICULTY.id,
            score: GAME.stats.score,
            moves: STATE.moves,
            time: STATE.seconds
        });

        

        setTimeout(() => {
            playSound(AUDIO.win);
            updateBestScoreDisplay();
            updateLeaderboard();
            let message = `
            🎉Congratulations!
            Player: ${STATE.playerName}
            Difficulty: ${CURRENT_DIFFICULTY.text}
            Moves: ${STATE.moves}
            Time: ${GAME.timerDisplay.textContent}
            Score: ${GAME.stats.score}`;

            if (isNewBest) {
                message += `\n
                🏆 NEW BEST SCORE!`
            }
            alert(message);
            
        },1100);
    }
}


// =======================================================================
// INITIALIZATION

function initializeGame() {
    getPlayerName();
    shuffleCards();
    createBoard();
    resetDisplay();
}

initializeGame();