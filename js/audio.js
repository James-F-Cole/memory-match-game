const AUDIO = {
    
flip: document.querySelector("#flip-sound"),
match: document.querySelector("#match-sound"),
mismatch: document.querySelector("#mismatch-sound"),
win: document.querySelector("#win-sound"),
background: document.querySelector("#background-music"),
timer: document.querySelector("#timer-sound"), 
restart: document.querySelector("#restart-sound"),
click: document.querySelector("#click-sound")

};

function playSound(sound) {
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}