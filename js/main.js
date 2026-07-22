// ==================================================================================
// DOM EVENTS

const easyButton = document.querySelector("#easy-btn");
const mediumButton = document.querySelector("#medium-btn");
const hardButton = document.querySelector("#hard-btn");

easyButton.addEventListener("click", () => {
    playSound(AUDIO.click);
    changeDifficulty(DIFFICULTIES.easy);
});

mediumButton.addEventListener("click", () => {
    playSound(AUDIO.click);
    changeDifficulty(DIFFICULTIES.medium);
});

hardButton.addEventListener("click", () => {
    playSound(AUDIO.click);
    changeDifficulty(DIFFICULTIES.hard);
});

const GAME = {
    currentPlayerDisplay: document.querySelector("#current-player"),
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
    },
    modal: document.querySelector("#game-over-modal"),
    summary: document.querySelector("#game-summary"),
    playAgainButton: document.querySelector("#play-again-btn"),
    playerInput: document.querySelector("#player-name"),
    playButton: document.querySelector("#play-btn"),
    leaderboardButton: document.querySelector("#leaderboard-btn"),
    menuButton: document.querySelector("#menu-btn"),
    resultsButton: document.querySelector("#results-btn"),
    closeLeaderboardButton: document.querySelector("#close-leaderboard-btn")
}; 

function startNewGame() {
    playSound(AUDIO.click);
    STATE.playerName = GAME.playerInput.value.trim() || "Anonymous";
    showGameScreen();
    restartGame();
}

function openLeaderboard() {
    playSound(AUDIO.click);
    updateLeaderboard();
    showLeaderboardModal();
}

function closeLeaderboard() {
    playSound(AUDIO.click);
    hideLeaderboardModal();
}

function playAgain() {
    playSound(AUDIO.click);
    hideGameOverModal();
    restartGame();;
}

function returnToMenu() {
    playSound(AUDIO.click);
    hideGameOverModal();
    resetGameState();
    showMenuScreen();

}

function updateMenu() {
    playSound(AUDIO.click);
    GAME.playerInput.value = STATE.playerName;
}

GAME.playAgainButton.addEventListener("click", playAgain)

GAME.playButton.addEventListener("click", startNewGame)

GAME.leaderboardButton.addEventListener("click", openLeaderboard);

GAME.closeLeaderboardButton.addEventListener("click", closeLeaderboard);

GAME.resultsButton.addEventListener("click", openLeaderboard);

GAME.menuButton.addEventListener("click", returnToMenu);
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
    GAME.gameBoard.style.opacity = 0;
    setTimeout(() => {
        resetStats()
        resetGameState();
        GAME.gameBoard.innerHTML = "";
        
        initializeGame();
        GAME.gameBoard.style.opacity = 1;
    }, 300);
    
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
            let summary = `
            <p><strong>Player:</strong> ${STATE.playerName}</p>
            <p><strong>Difficulty:</strong> ${CURRENT_DIFFICULTY.text}</p>
            <p><strong>Moves:</strong> ${STATE.moves}</p>
            <p><strong>Time:</strong> ${GAME.timerDisplay.textContent}</p>
            <p><strong>Score:</strong> ${GAME.stats.score}</p>`;

            if (isNewBest) {
                summary += `<p class="new-best">🏆 NEW BEST SCORE! </p>`
            }
            showGameOverModal(summary);
            GAME.gameBoard.classList.add("celebrate");
            setTimeout(() => {
                 GAME.gameBoard.classList.remove("celebrate");
            }, 2000);
            
        },1000);
        
    }
}


// =======================================================================
// INITIALIZATION

function initializeGame() {
    shuffleCards();
    createBoard();
    resetDisplay();
}

showMenuScreen();