const level1 = document.getElementById('box1');
const level2 = document.getElementById('box2');
const steps = document.getElementById('steps');
const timerElement = document.getElementById('timmer');
const know = document.getElementById('know');
const know1 = document.getElementById('know1');

function LevelCross() {
    level1.style.display = "none";
    level2.style.display = "block";
    const audio = new Audio('process2.mp3');
    audio.play();
}

const radioButtons = document.querySelectorAll('input[name="Understand"]');

let a;

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        a = radio.value;
        console.log(`Selected: ${a}`);
        if(a === 'Yes'){
            window.location.href = 'game.html';
        } else {
            steps.style.display = 'block';
            timerElement.style.display = 'none';
            know.style.display = 'none';
            know1.style.display = 'flex';
        }
    });
});

let timeLeft = 60;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElement.textContent = `${minutes}:${seconds}`;
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        steps.style.display = 'block';
        timerElement.style.display = 'none';
        know.style.display = 'none';
        know1.style.display = 'flex';
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

function Understand() {
    window.location.href = 'game.html';
}