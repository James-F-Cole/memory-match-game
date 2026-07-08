const DIFFICULTIES = {

    "easy": {
        rows: 4,
        columns: 4
    },

    "medium": {
        rows: 5,
        columns: 4
    },

    "hard": {
        rows: 6,
        columns: 6
    }

};

let CURRENT_DIFFICULTY = DIFFICULTIES.easy;


const CONFIG = {
    board : CURRENT_DIFFICULTY,

    symbols : [
        "🐶", "🐱", "🐭", "🦊", "🐻", "🐼", "🐨", "🐯",
        "🦁", "🐮", "🐷", "🐸", "🐔", "🦆", "🦅", "🦉",
        "🐺", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", 
        "🐜", "🦟", "🦗", "🕷️", "🦂", "🐢", "🐍", "🦎", 
        "🐙", "🦑", "🦖", "🦕", "🦐", "🦀", "🐡", "🐬", 
        "🐳", "🐊", "🦒", "🦧", "🦩", "🦜", "🦚", "🐑", 
        "🐪", "🐘", "🦘", "🦥", "🐿️", "🦨", "🐇", "🕊️"
    ],

    ui : {
        flipDelay: 1000
    },

    timer : {
        tickRate: 1000
    }
};

function changeDifficulty(difficulty) {

    CONFIG.board = difficulty;
    restartGame();

}

function getTotalCards() {
    return CONFIG.board.rows * CONFIG.board.columns;

}


function getTotalPairs() {
    return getTotalCards() / 2;
}