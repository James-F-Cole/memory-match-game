const DIFFICULTIES = {

    "easy": {
        id: "easy",
        text: "Easy",
        rows: 4,
        columns: 4
    },

    "medium": {
        id: "medium",
        text: "Medium",
        rows: 5,
        columns: 4
    },

    "hard": {
        id: "hard",
        text: "Hard",
        rows: 6,
        columns: 6
    }

};

let CURRENT_DIFFICULTY = DIFFICULTIES.easy;


let CONFIG = {
    board : CURRENT_DIFFICULTY,

    symbols : [
        "🐶", "🐱", "🐭", ,"🦋", "🐌", "🐞", "🐜", "🦟",
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
    restartGame();

}

function getTotalCards() {
    return CONFIG.board.rows * CONFIG.board.columns;

}


function getTotalPairs() {
    return getTotalCards() / 2;
}