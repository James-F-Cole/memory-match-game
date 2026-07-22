function updatePlayerDisplay() {
    GAME.currentPlayerDisplay.textContent = STATE.playerName;
}

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
    updateDifficultyButtons();
    updatePlayerDisplay();

}

function updateLeaderboard(){

    const leaderboard = getLeaderboard();
    renderLeaderboard("easy", leaderboard.easy);
    renderLeaderboard("medium", leaderboard.medium);
    renderLeaderboard("hard", leaderboard.hard);
}

function renderLeaderboard(difficulty, players) {

    const list = document.querySelector(`#${difficulty}-leaderboard`);
    if(players.length === 0) {
        list.innerHTML = "<li>No scores yet.</li>"
        return;
    }

    list.innerHTML = "";
    players.forEach((player, index) => {
        const item = document.createElement("li");
        const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}.`
        item.innerHTML = `<span>${medal} ${player.player}</span> --------- <strong>${player.score}</strong>`;
        list.appendChild(item);
    });
}

function updateDifficultyButtons() {
    easyButton.classList.remove("active-difficulty");
    mediumButton.classList.remove("active-difficulty");
    hardButton.classList.remove("active-difficulty");
    switch(CURRENT_DIFFICULTY.id) {
        case "easy":
            easyButton.classList.add("active-difficulty");
            break;
        case "medium":
            mediumButton.classList.add("active-difficulty");
            break;
        case "hard":
            hardButton.classList.add("active-difficulty");
            break;
    }
}