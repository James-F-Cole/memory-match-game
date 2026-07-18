function incrementMatches() {
    GAME.stats.matches++;
    calculateScore();
}

function incrementMisses() {
    GAME.stats.misses++;
    calculateScore();
}

function getStatistics() {
    return {
        moves: STATE.moves,
        matches: GAME.stats.matches,
        misses: GAME.stats.misses,
        score: GAME.stats.score,
        difficulty: CURRENT_DIFFICULTY.text
    };
}
