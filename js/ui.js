function updateMovesDisplay() {
    GAME.movesDisplay.textContent = STATE.moves;
}

function updateTimerDisplay() {
    let minutes = Math.floor(STATE.seconds / 60);
    let remainingSeconds = STATE.seconds % 60;
    GAME.timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


function resetDisplay() {
    updateMovesDisplay();
    calculateScore();
    GAME.timerDisplay.textContent = "00:00";
}