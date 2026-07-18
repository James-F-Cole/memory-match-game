const STORAGE_KEYS = {

    BEST_SCORES:
        "memoryMatchBestScores",

    LEADERBOARD:
        "memoryMatchLeaderboard"

};


// =============================
// BEST SCORES
// =============================


function getBestScores() {

    const scores =
        localStorage.getItem(
            STORAGE_KEYS.BEST_SCORES
        );

    return scores
        ? JSON.parse(scores)
        : {};
}



function saveBestScores(scores) {

    localStorage.setItem(
        STORAGE_KEYS.BEST_SCORES,
        JSON.stringify(scores)
    );

}



function saveBestScore(difficulty, score) {

    const scores = getBestScores();


    if (!scores[difficulty] || score > scores[difficulty]) {

        scores[difficulty] = score;

        saveBestScores(scores);
        return true;

    }
    return false;

}



function getBestScore(difficulty) {

    const scores = getBestScores();

    return scores[difficulty] || 0;

}



// =============================
// LEADERBOARD
// =============================


function getLeaderboard() {

    const leaderboard =
        localStorage.getItem(
            STORAGE_KEYS.LEADERBOARD
        );


    return leaderboard
        ? JSON.parse(leaderboard)
        : {
            easy: [],
            medium: [],
            hard: []
        };

}



function saveLeaderboard(leaderboard) {

    localStorage.setItem(
        STORAGE_KEYS.LEADERBOARD,
        JSON.stringify(leaderboard)
    );

}



function addLeaderboardEntry(entry) {
    const leaderboard = getLeaderboard();

    const difficulty = entry.difficulty;



    leaderboard[difficulty].push({
        player: entry.player,
        score: entry.score,
        moves: entry.moves,
        time: entry.time
    });

    leaderboard[difficulty].sort((a,b)=> b.score - a.score);

    leaderboard[difficulty] = leaderboard[difficulty].slice(0,10);

    saveLeaderboard(leaderboard);
}



function clearLeaderboard() {
    localStorage.removeItem(STORAGE_KEYS.LEADERBOARD);
}