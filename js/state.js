const STATE = {
    gameStarted: false,
    moves: 0,
    matchedPairs: 0,
    firstCard: null,
    secondCard: null,
    lockBoard: false,
    seconds: 0,
    timerInterval: null,

    playerName: "Anonymous"
};

function getPlayerName() {
    const name = prompt(
        "Enter your name:"
    );

    STATE.playerName = name && name.trim()
        ? name.trim()
        : "Anonymous";
}

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