function updateMovesDisplay() {
    GAME.movesDisplay.textContent = STATE.moves;
}

function updateTimerDisplay() {
    let minutes = Math.floor(STATE.seconds / 60);
    let remainingSeconds = STATE.seconds % 60;
    GAME.timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateBestScoreDisplay() {
    const bestScore = getBestScore(CURRENT_DIFFICULTY.id);
    GAME.bestScoreDisplay.textContent = bestScore;
}

function updateDifficultyDisplay () {
    GAME.difficultyDisplay.textContent = CURRENT_DIFFICULTY.text;
}

function resetDisplay() {

    updateMovesDisplay();
    calculateScore();
    updateTimerDisplay();
    updateBestScoreDisplay();
    updateDifficultyDisplay();
    updateLeaderboard();

}

function updateLeaderboard(){

    const leaderboard = getLeaderboard();
    renderLeaderboard("easy", leaderboard.easy);
    renderLeaderboard("medium", leaderboard.medium);
    renderLeaderboard("hard", leaderboard.hard);
}

function renderLeaderboard(difficulty, players) {

    const list = document.querySelector(`#${difficulty}-leaderboard`);
    list.innerHTML = "";
    players.forEach((player, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${player.player} - ${player.score}`;
        list.appendChild(item);
    });
}