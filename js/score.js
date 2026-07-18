function calculateScore() {
    const matchPoints = GAME.stats.matches * 100;
    const missPenalty = GAME.stats.misses * 10;

    GAME.stats.score = Math.max(0, matchPoints - missPenalty);

    GAME.scoreDisplay.textContent = GAME.stats.score;
}


function resetStats() {
    GAME.stats.matches = 0;
    GAME.stats.misses = 0;
    GAME.stats.score = 0;
}