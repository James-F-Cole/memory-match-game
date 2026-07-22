const SCREEN = {
    menu: document.querySelector("#menu-screen"),
    game: document.querySelector("#game-screen"),
    leaderboardModal: document.querySelector("#leaderboard-modal"),
    gameOverModal: document.querySelector("#game-over-modal")
}

function showMenuScreen() {
    SCREEN.menu.classList.remove("hidden");
    SCREEN.game.classList.add("hidden");
    hideAllModals();
    updateMenu()
}

function showGameScreen() {
    SCREEN.menu.classList.add("hidden");
    SCREEN.game.classList.remove("hidden");
    hideAllModals();
}

function showLeaderboardModal() {
    hideAllModals();
    SCREEN.leaderboardModal.classList.remove("hidden");
}

function hideLeaderboardModal() {
    SCREEN.leaderboardModal.classList.add("hidden");
}

function showGameOverModal(message) {
    hideAllModals();
    const gameSummary = document.querySelector("#game-summary");
    gameSummary.innerHTML = message;
    SCREEN.gameOverModal.classList.remove("hidden");
}

function hideGameOverModal() {
    SCREEN.gameOverModal.classList.add("hidden");
}

function hideAllModals() {
    hideLeaderboardModal();
    hideGameOverModal();
}