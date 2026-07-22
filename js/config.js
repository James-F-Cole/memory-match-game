const DIFFICULTIES = {

    "easy": {
        id: "easy",
        text: "Easy",
        rows: 4,
        columns: 4,
        boardwidth: 460
    },

    "medium": {
        id: "medium",
        text: "Medium",
        rows: 4,
        columns: 5,
        boardwidth: 500
    },

    "hard": {
        id: "hard",
        text: "Hard",
        rows: 6,
        columns: 6,
        boardwidth: 600
    }

};

let CURRENT_DIFFICULTY = DIFFICULTIES.easy;


let CONFIG = {
    board : CURRENT_DIFFICULTY,

    symbols : [
        "🐶", "🐱", "🐭", "🦋", "🐌", "🐞","🦟", "🐜",
        "🦂", "🐢", "🐍","🐸", "🐔", "🦆", "🦅", "🦉",
        "🐪", "🐘", "🐝", "🐛", "🐯",  "🦗", "🕷️", "🦀",
        "🦎", "🦁", "🐮", "🐷",  "🐺", "🐴", "🦄", "🐼", "🐨",
        "🐙", "🦑", "🦖", "🦕", "🦐", "🐡", "🐬", 
        "🐳", "🐊", "🦒", "🦧", "🦩", "🦜", "🦚", "🐑", 
         "🦘", "🦥", "🐿️", "🦨", "🐇", "🕊️", "🦊", "🐻"
    ],

    ui : {
        flipDelay: 1000
    },

    timer : {
        tickRate: 1000
    }
};

function changeDifficulty(difficulty) {
    if (difficulty.id == "easy") {
        CURRENT_DIFFICULTY = DIFFICULTIES.easy;
    }
    else if (difficulty.id == "medium") {
        CURRENT_DIFFICULTY = DIFFICULTIES.medium;
    }
    else if (difficulty.id == "hard") {
        CURRENT_DIFFICULTY = DIFFICULTIES.hard;
    }     
    CONFIG.board = CURRENT_DIFFICULTY;
    updateDifficultyButtons();

}

function getTotalCards() {
    return CONFIG.board.rows * CONFIG.board.columns;

}


function getTotalPairs() {
    return getTotalCards() / 2;
}