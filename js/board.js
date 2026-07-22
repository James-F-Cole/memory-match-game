function generateCardArray() {
    return [...CONFIG.symbols.slice(0, getTotalPairs()), ...CONFIG.symbols.slice(0, getTotalPairs())];
}

function shuffleCards() {
    GAME.cardArray = generateCardArray();
    for (let i = GAME.cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [GAME.cardArray[i], GAME.cardArray[j]] = [GAME.cardArray[j], GAME.cardArray[i]];
    }
}

function createBoard() {
    const availableHeight = window.innerHeight * 0.60;
    const availableWidth = window.innerWidth * 0.90;

    const boardSize = Math.min(
        CONFIG.board.boardwidth,
        availableHeight,
        availableWidth
    );

    GAME.gameBoard.style.setProperty("--board-size", boardSize + "px");
    GAME.gameBoard.style.setProperty("--column", CONFIG.board.columns)
    GAME.cardArray.forEach(cardValue => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${cardValue}</div>
            </div>
        `;
        card.dataset.value = cardValue;
        card.addEventListener("click", flipCard);
        GAME.gameBoard.appendChild(card);
    });
}
