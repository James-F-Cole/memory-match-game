function shuffleCards() {
    for (let i = GAME.cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [GAME.cardArray[i], GAME.cardArray[j]] = [GAME.cardArray[j], GAME.cardArray[i]];
    }
}

function createBoard() {
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
