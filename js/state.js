const STATE = {
    gameStarted: false,
    moves: 0,
    matchedPairs: 0,
    firstCard: null,
    secondCard: null,
    lockBoard: false,
    seconds: 0,
    timerInterval: null
};

function resetGameState() {
    STATE.gameStarted = false;
    STATE.firstCard = null;
    STATE.secondCard = null;
    STATE.lockBoard = false;
    STATE.moves = 0;
    STATE.matchedPairs = 0;
    STATE.seconds = 0;
    clearInterval(STATE.timerInterval);
    STATE.timerInterval = null;
}