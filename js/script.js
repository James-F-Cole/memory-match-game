let firstCard = null;
let secondCard = null;

let lockBoard = false;

let moves = 0;
const movesDisplay = document.querySelector("#moves");

const flipSound = document.querySelector("#flip-sound");
const matchSound = document.querySelector("#match-sound");
const mismatchSound = document.querySelector("#mismatch-sound");
const winSound = document.querySelector("#win-sound");
const backgroundMusic = document.querySelector("#background-music");
const timerSound = document.querySelector("#timer-sound"); 
const restartSound = document.querySelector("#restart-sound");
const clickSound = document.querySelector("#click-sound");

const restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", restartGame);

const gameBoard = document.querySelector(".game-board");
let cardArray = [
    "A", "A",
    "B", "B",
    "C", "C",
    "D", "D",
    "E", "E",
    "F", "F",
    "G", "G",
    "H", "H"
];

function shuffleCards() {
    for (let i = cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
}

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = "?";
        card.dataset.value = cardArray[i];
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    }
}

function flipCard() {
    if (lockBoard === true || this === firstCard)
    {
        return;
    }
    const clickedCard = this;
    clickedCard.textContent = clickedCard.dataset.value;
    // flipSound.play();
    if (firstCard === null) {
        firstCard = clickedCard;
        return;
    }
    else {
        lockBoard = true;
        secondCard = clickedCard;
        moves++;
        movesDisplay.textContent = moves;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        disableMatchedCards();
    } else {
        unflipCards();
    }
}


function disableMatchedCards() {
    // matchSound.play();
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetTurn();
}

function unflipCards() {
    // mismatchSound.play();
    setTimeout(() => {
        firstCard.textContent = "?";
        secondCard.textContent = "?";
        resetTurn()
    }, 1000)
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restartGame() {
    gameBoard.innerHTML = "";
    moves = 0;
    movesDisplay.textContent = moves;
    resetTurn();
    shuffleCards();
    createBoard();
    
}
shuffleCards();
createBoard();