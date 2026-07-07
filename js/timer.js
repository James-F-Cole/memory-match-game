function startTimer() {
    STATE.timerInterval = setInterval(() => {
        STATE.seconds++;
        let minutes = Math.floor(STATE.seconds / 60);
        let remainingSeconds = STATE.seconds % 60;
        updateTimerDisplay();
        if (STATE.seconds % 60 === 0) {
            // playSound(AUDIO.timer);
        }
    }, CONFIG.timer.tickRate);
}