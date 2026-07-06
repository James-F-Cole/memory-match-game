let gameStarted = false;

let firstCard = null;
let secondCard = null;

let lockBoard = false;

let moves = 0;
const movesDisplay = document.querySelector("#moves");

let seconds = 0;
let timerInterval = null;
const timerDisplay = document.querySelector("#timer");

let matchedPairs = 0;

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
    "🍎","🍎",
    "🚗","🚗",
    "⚽","⚽",
    "🎧","🎧",
    "🐶","🐶",
    "🌙","🌙",
    "🎮","🎮",
    "📱","📱"
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
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${cardArray[i]}</div>
            </div>
        `;
        card.dataset.value = cardArray[i];
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    }
}

function flipCard() {
    if (!gameStarted) {
        gameStarted = true;
        startTimer();
        // backgroundMusic.play();
        //timerSound.play();
    }
    if (lockBoard === true || this === firstCard)
    {
        return;
    }
    const clickedCard = this;
    clickedCard.classList.add("flipped");
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
    matchedPairs++;
    setTimeout(() => {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        resetTurn();
    }, 1000);
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    checkForWin();
    
}

function unflipCards() {
    // mismatchSound.play();
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
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
        matchedPairs = 0;
        seconds = 0;
        timerDisplay.textContent = "00:00";
        clearInterval(timerInterval);
        timerInterval = null;
        gameStarted = false;
        resetTurn();
        shuffleCards();
        createBoard();
}

function checkForWin() {
    if (matchedPairs === cardArray.length / 2) {
        clearInterval(timerInterval);
        setTimeout(() => {
            // winSound.play();
            alert("You win!");
        }, 1100);
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        if (seconds % 60 === 0) {
            // timerSound.play();
        }
    }, 1000);
}

shuffleCards();
createBoard();