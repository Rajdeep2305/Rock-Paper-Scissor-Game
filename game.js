const hands = document.getElementById('hands');
const robotHand = document.getElementById('robotHand');
const robotHandFinger = document.getElementById('robotHandFinger');
let robotFingerOne = document.getElementById('robotFingerOne');
let robotFingerTwo = document.getElementById('robotFingerTwo');
let robotFingerThree = document.getElementById('robotFingerThree');
let robotFingerFour = document.getElementById('robotFingerFour');
const yourHand = document.getElementById('yourHand');
const yourHandFinger = document.getElementById('yourHandFinger');
let yourFingerOne = document.getElementById('yourFingerOne');
let yourFingerTwo = document.getElementById('yourFingerTwo');
let yourFingerThree = document.getElementById('yourFingerThree');
let yourFingerFour = document.getElementById('yourFingerFour');
const button0 = document.getElementById('button0');
const playAgain = document.getElementById('play');
const br = document.getElementById('br');

const youWon = document.getElementById('youWon');
const robotWon = document.getElementById('robotWon');
const draw = document.getElementById('draw');

const rocks = document.getElementById('rock0');
const papers = document.getElementById('paper0');
const scissors = document.getElementById('scissor0');

const robotChoose1 = document.getElementById('robotChoose1');
const robotChoose2 = document.getElementById('robotChoose2');
const robotChoose3 = document.getElementById('robotChoose3');

const Choose1 = document.getElementById('choose1');
const Choose2 = document.getElementById('choose2');
const Choose3 = document.getElementById('choose3');

youWon.style.display = 'none';
robotWon.style.display = 'none';
draw.style.display = 'none';
rocks.style.display = 'none';
papers.style.display = 'none';
scissors.style.display = 'none';
playAgain.style.display = 'none';
robotChoose1.style.display = 'none';
robotChoose2.style.display = 'none';
robotChoose3.style.display = 'none';
Choose1.style.display = 'none';
Choose2.style.display = 'none';
Choose3.style.display = 'none';

if (window.innerWidth <= 430) {
    button0.style.display = 'flex';
    hands.style.display = 'flex';
    br.style.display = 'block';
} else {
    button0.style.display = 'flex';
    hands.style.display = 'flex';
    br.style.display = 'none';
}

function updateScore() {
    const robotScoreElement = document.getElementById('robotScore');
    let currentScore = parseInt(robotScoreElement.textContent);
    currentScore += 5;
    robotScoreElement.textContent = currentScore.toString().padStart(2, '0');
}

function updateScoreYou() {
    const yourScoreElement = document.getElementById('yourScore');
    let currentScore = parseInt(yourScoreElement.textContent);
    currentScore += 5;
    yourScoreElement.textContent = currentScore.toString().padStart(2, '0');
}

function displayElement(id) {
    document.getElementById(id).style.display = 'block';
}

function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}

const playAudioRock = () => {
    const audio = new Audio('Rock.mp3');
    audio.play();
};

const playAudioPaper = () => {
    const audio = new Audio('Paper.mp3');
    audio.play();
};

const playAudioScissor = () => {
    const audio = new Audio('Scissor.mp3');
    audio.play();
};

function rock() {

    Choose1.style.display = 'block';
    button0.style.display = 'none';
    let rand1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand3 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand4 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    let a = (rand1 * rand2) / (rand3 + rand4);

    let final = Math.floor(a % 10);

    console.log(final);

    setTimeout(() => {
        displayElement('rock0');
        playAudioRock();
    }, 0);

    setTimeout(() => {
        hideElement('rock0');
        displayElement('paper0');
        playAudioPaper();
    }, 2000);

    setTimeout(() => {
        hideElement('paper0');
        displayElement('scissor0');
        playAudioScissor();
    }, 4000);

    setTimeout(() => {
        hideElement('scissor0');
    },5000);

    setTimeout(() => {
        if (final == 1 || final == 5 || final == 9) {
            console.log("The match is draw.");
            robotHand.style.animation = 'none';
            yourHand.style.animation = 'none';

            setTimeout(() => {
                hands.style.display = 'none';
                youWon.style.display = 'none';
                robotWon.style.display = 'none';
                draw.style.display = 'block';
                playAgain.style.display = 'flex';
                robotChoose1.style.display = 'block';
                const audio = new Audio('draw.mp3');
                audio.play();
            },3000);
            // robot rock
            robotFingerThree.style.display = 'block';
            robotFingerFour.style.display = 'block';

            robotFingerOne.style.borderBottomRightRadius = '50%';
            robotFingerOne.style.borderTopRightRadius = '50%';
            robotFingerOne.style.width = '25px';
            robotFingerOne.style.rotate = '0deg';
            robotFingerOne.style.marginBottom = '0px';
            robotFingerOne.style.rotate = '0deg';

            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.borderBottomRightRadius = '50%';
            robotFingerTwo.style.borderTopRightRadius = '50%';
            robotFingerTwo.style.width = '30px';
            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.marginBottom = '0px';

            robotFingerThree.style.borderBottomRightRadius = '50%';
            robotFingerThree.style.borderTopRightRadius = '50%';
            robotFingerThree.style.width = '27px';
            robotFingerThree.style.rotate = '0deg';
            robotFingerThree.style.marginBottom = '0px';

            robotFingerFour.style.borderBottomRightRadius = '50%';
            robotFingerFour.style.borderTopRightRadius = '50%';
            robotFingerFour.style.width = '20px';
            robotFingerFour.style.rotate = '0deg';
            robotFingerFour.style.marginBottom = '0px';

            // you Rock
            yourFingerThree.style.display = 'block';
            yourFingerFour.style.display = 'block';

            yourFingerOne.style.borderBottomLeftRadius = '50%';
            yourFingerOne.style.borderTopLeftRadius = '50%';
            yourFingerOne.style.width = '25px';
            yourFingerOne.style.rotate = '0deg';
            yourFingerOne.style.marginBottom = '0px';
            yourFingerOne.style.rotate = '0deg';

            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.borderBottomLeftRadius = '50%';
            yourFingerTwo.style.borderTopLeftRadius = '50%';
            yourFingerTwo.style.width = '30px';
            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.marginBottom = '0px';

            yourFingerThree.style.borderBottomLeftRadius = '50%';
            yourFingerThree.style.borderTopLeftRadius = '50%';
            yourFingerThree.style.width = '27px';
            yourFingerThree.style.rotate = '0deg';
            yourFingerThree.style.marginBottom = '0px';

            yourFingerFour.style.borderBottomLeftRadius = '50%';
            yourFingerFour.style.borderTopLeftRadius = '50%';
            yourFingerFour.style.width = '20px';
            yourFingerFour.style.rotate = '0deg';
            yourFingerFour.style.marginBottom = '0px';
        } else if (final == 2 || final == 6 || final == 7) {
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            console.log('Robot won the match');

            setTimeout(() => {
                updateScore();
                hands.style.display = 'none';
                youWon.style.display = 'none';
                robotWon.style.display = 'block';
                draw.style.display = 'none';
                playAgain.style.display = 'flex';
                const audio = new Audio('robot.mp3');
                audio.play();
                robotChoose2.style.display = 'block';
            },3000);
            //robot paper
            robotFingerThree.style.display = 'block';
            robotFingerFour.style.display = 'block';

            robotFingerOne.style.borderBottomRightRadius = '0';
            robotFingerOne.style.borderTopRightRadius = '0';
            robotFingerOne.style.width = '55px';
            robotFingerOne.style.rotate = '0deg';
            robotFingerOne.style.marginBottom = '0px';
            robotFingerOne.style.rotate = '0deg';

            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.borderBottomRightRadius = '0';
            robotFingerTwo.style.borderTopRightRadius = '0';
            robotFingerTwo.style.width = '55px';
            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.marginBottom = '0px';

            robotFingerThree.style.borderBottomRightRadius = '0';
            robotFingerThree.style.borderTopRightRadius = '0';
            robotFingerThree.style.width = '55px';
            robotFingerThree.style.rotate = '0deg';
            robotFingerThree.style.marginBottom = '0px';

            robotFingerFour.style.borderBottomRightRadius = '0';
            robotFingerFour.style.borderTopRightRadius = '0';
            robotFingerFour.style.width = '55px';
            robotFingerFour.style.rotate = '0deg';
            robotFingerFour.style.marginBottom = '0px';

            // you Rock
            yourFingerThree.style.display = 'block';
            yourFingerFour.style.display = 'block';

            yourFingerOne.style.borderBottomLeftRadius = '50%';
            yourFingerOne.style.borderTopLeftRadius = '50%';
            yourFingerOne.style.width = '25px';
            yourFingerOne.style.rotate = '0deg';
            yourFingerOne.style.marginBottom = '0px';
            yourFingerOne.style.rotate = '0deg';

            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.borderBottomLeftRadius = '50%';
            yourFingerTwo.style.borderTopLeftRadius = '50%';
            yourFingerTwo.style.width = '30px';
            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.marginBottom = '0px';

            yourFingerThree.style.borderBottomLeftRadius = '50%';
            yourFingerThree.style.borderTopLeftRadius = '50%';
            yourFingerThree.style.width = '27px';
            yourFingerThree.style.rotate = '0deg';
            yourFingerThree.style.marginBottom = '0px';

            yourFingerFour.style.borderBottomLeftRadius = '50%';
            yourFingerFour.style.borderTopLeftRadius = '50%';
            yourFingerFour.style.width = '20px';
            yourFingerFour.style.rotate = '0deg';
            yourFingerFour.style.marginBottom = '0px';
        } else if (final == 0 || final == 3 || final == 4 || final == 8){
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            setTimeout(() => {
                updateScoreYou();
                hands.style.display = 'none';
                youWon.style.display = 'block';
                robotWon.style.display = 'none';
                draw.style.display = 'none';
                playAgain.style.display = 'flex';
                robotChoose3.style.display = 'block';
                const audio = new Audio('wonMas.mp3');
                audio.play();
            },3000);

            //robot scissor
            robotFingerOne.style.borderBottomRightRadius = '0';
            robotFingerOne.style.borderTopRightRadius = '0';
            robotFingerOne.style.width = '60px';
            robotFingerOne.style.marginBottom = '10px';
            robotFingerOne.style.rotate = '-15deg';

            robotFingerTwo.style.borderBottomRightRadius = '0';
            robotFingerTwo.style.borderTopRightRadius = '0';
            robotFingerTwo.style.width = '60px';
            robotFingerTwo.style.marginBottom = '10px';
            robotFingerTwo.style.rotate = '15deg';

            robotFingerThree.style.display = 'none';
            robotFingerFour.style.display = 'none';

            // you Rock
            yourFingerThree.style.display = 'block';
            yourFingerFour.style.display = 'block';

            yourFingerOne.style.borderBottomLeftRadius = '50%';
            yourFingerOne.style.borderTopLeftRadius = '50%';
            yourFingerOne.style.width = '25px';
            yourFingerOne.style.rotate = '0deg';
            yourFingerOne.style.marginBottom = '0px';
            yourFingerOne.style.rotate = '0deg';

            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.borderBottomLeftRadius = '50%';
            yourFingerTwo.style.borderTopLeftRadius = '50%';
            yourFingerTwo.style.width = '30px';
            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.marginBottom = '0px';

            yourFingerThree.style.borderBottomLeftRadius = '50%';
            yourFingerThree.style.borderTopLeftRadius = '50%';
            yourFingerThree.style.width = '27px';
            yourFingerThree.style.rotate = '0deg';
            yourFingerThree.style.marginBottom = '0px';

            yourFingerFour.style.borderBottomLeftRadius = '50%';
            yourFingerFour.style.borderTopLeftRadius = '50%';
            yourFingerFour.style.width = '20px';
            yourFingerFour.style.rotate = '0deg';
            yourFingerFour.style.marginBottom = '0px';
        }
    },5000)

}

function paper() {
    Choose2.style.display = 'block';
    button0.style.display = 'none';
    let rand1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand3 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand4 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    let a = (rand1 * rand2) / (rand3 + rand4);

    let final = Math.floor(a % 10);

    console.log(final);

    setTimeout(() => {
        displayElement('rock0');
        playAudioRock();
    }, 0);

    setTimeout(() => {
        hideElement('rock0');
        displayElement('paper0');
        playAudioPaper();
    }, 2000);

    setTimeout(() => {
        hideElement('paper0');
        displayElement('scissor0');
        playAudioScissor();
    }, 4000);

    setTimeout(() => {
        hideElement('scissor0');
    },5000);
    setTimeout(() => {
        if (final == 1 || final == 5 || final == 9) {
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            //robot rock
            robotFingerThree.style.display = 'block';
            robotFingerFour.style.display = 'block';

            robotFingerOne.style.borderBottomRightRadius = '50%';
            robotFingerOne.style.borderTopRightRadius = '50%';
            robotFingerOne.style.width = '25px';
            robotFingerOne.style.rotate = '0deg';
            robotFingerOne.style.marginBottom = '0px';
            robotFingerOne.style.rotate = '0deg';

            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.borderBottomRightRadius = '50%';
            robotFingerTwo.style.borderTopRightRadius = '50%';
            robotFingerTwo.style.width = '30px';
            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.marginBottom = '0px';

            robotFingerThree.style.borderBottomRightRadius = '50%';
            robotFingerThree.style.borderTopRightRadius = '50%';
            robotFingerThree.style.width = '27px';
            robotFingerThree.style.rotate = '0deg';
            robotFingerThree.style.marginBottom = '0px';

            robotFingerFour.style.borderBottomRightRadius = '50%';
            robotFingerFour.style.borderTopRightRadius = '50%';
            robotFingerFour.style.width = '20px';
            robotFingerFour.style.rotate = '0deg';
            robotFingerFour.style.marginBottom = '0px';

            //you paper
            yourFingerThree.style.display = 'block';
            yourFingerFour.style.display = 'block';

            yourFingerOne.style.borderBottomLeftRadius = '0';
            yourFingerOne.style.borderTopLeftRadius = '0';
            yourFingerOne.style.width = '55px';
            yourFingerOne.style.rotate = '0deg';
            yourFingerOne.style.marginBottom = '0px';
            yourFingerOne.style.rotate = '0deg';

            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.borderBottomLeftRadius = '0';
            yourFingerTwo.style.borderTopLeftRadius = '0';
            yourFingerTwo.style.width = '60px';
            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.marginBottom = '0px';

            yourFingerThree.style.borderBottomLeftRadius = '0';
            yourFingerThree.style.borderTopLeftRadius = '0';
            yourFingerThree.style.width = '57px';
            yourFingerThree.style.rotate = '0deg';
            yourFingerThree.style.marginBottom = '0px';

            yourFingerFour.style.borderBottomLeftRadius = '0';
            yourFingerFour.style.borderTopLeftRadius = '0';
            yourFingerFour.style.width = '50px';
            yourFingerFour.style.rotate = '0deg';
            yourFingerFour.style.marginBottom = '0px';
            console.log('You won the match');
            setTimeout(() => {
                updateScoreYou();
                hands.style.display = 'none';
                youWon.style.display = 'block';
                robotWon.style.display = 'none';
                draw.style.display = 'none';
                playAgain.style.display = 'flex';
                robotChoose1.style.display = 'block';
                const audio = new Audio('wonPro.mp3');
                audio.play();
            },3000);
        } else if (final == 2 || final == 6 || final == 7) {
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            //robot paper
            robotFingerThree.style.display = 'block';
            robotFingerFour.style.display = 'block';

            robotFingerOne.style.borderBottomRightRadius = '0';
            robotFingerOne.style.borderTopRightRadius = '0';
            robotFingerOne.style.width = '55px';
            robotFingerOne.style.rotate = '0deg';
            robotFingerOne.style.marginBottom = '0px';
            robotFingerOne.style.rotate = '0deg';

            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.borderBottomRightRadius = '0';
            robotFingerTwo.style.borderTopRightRadius = '0';
            robotFingerTwo.style.width = '55px';
            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.marginBottom = '0px';

            robotFingerThree.style.borderBottomRightRadius = '0';
            robotFingerThree.style.borderTopRightRadius = '0';
            robotFingerThree.style.width = '55px';
            robotFingerThree.style.rotate = '0deg';
            robotFingerThree.style.marginBottom = '0px';

            robotFingerFour.style.borderBottomRightRadius = '0';
            robotFingerFour.style.borderTopRightRadius = '0';
            robotFingerFour.style.width = '55px';
            robotFingerFour.style.rotate = '0deg';
            robotFingerFour.style.marginBottom = '0px';

            //you paper
            yourFingerThree.style.display = 'block';
            yourFingerFour.style.display = 'block';

            yourFingerOne.style.borderBottomLeftRadius = '0';
            yourFingerOne.style.borderTopLeftRadius = '0';
            yourFingerOne.style.width = '55px';
            yourFingerOne.style.rotate = '0deg';
            yourFingerOne.style.marginBottom = '0px';
            yourFingerOne.style.rotate = '0deg';

            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.borderBottomLeftRadius = '0';
            yourFingerTwo.style.borderTopLeftRadius = '0';
            yourFingerTwo.style.width = '60px';
            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.marginBottom = '0px';

            yourFingerThree.style.borderBottomLeftRadius = '0';
            yourFingerThree.style.borderTopLeftRadius = '0';
            yourFingerThree.style.width = '57px';
            yourFingerThree.style.rotate = '0deg';
            yourFingerThree.style.marginBottom = '0px';

            yourFingerFour.style.borderBottomLeftRadius = '0';
            yourFingerFour.style.borderTopLeftRadius = '0';
            yourFingerFour.style.width = '50px';
            yourFingerFour.style.rotate = '0deg';
            yourFingerFour.style.marginBottom = '0px';
            console.log("The match is draw.");
            setTimeout(() => {
                hands.style.display = 'none';
                youWon.style.display = 'none';
                robotWon.style.display = 'none';
                draw.style.display = 'block';
                playAgain.style.display = 'flex';
                robotChoose2.style.display = 'block';
                const audio = new Audio('draw.mp3');
                audio.play();
            },3000);
        } else if (final == 0 || final == 3 || final == 4 || final == 8){
            console.log('Robot won the match');
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            setTimeout(() => {
                updateScore();
                hands.style.display = 'none';
                youWon.style.display = 'none';
                robotWon.style.display = 'block';
                draw.style.display = 'none';
                playAgain.style.display = 'flex';
                robotChoose3.style.display = 'block';
                const audio = new Audio('robot.mp3');
                audio.play();
            },3000);
            //robot scissor
            robotFingerOne.style.borderBottomRightRadius = '0';
            robotFingerOne.style.borderTopRightRadius = '0';
            robotFingerOne.style.width = '60px';
            robotFingerOne.style.marginBottom = '10px';
            robotFingerOne.style.rotate = '-15deg';

            robotFingerTwo.style.borderBottomRightRadius = '0';
            robotFingerTwo.style.borderTopRightRadius = '0';
            robotFingerTwo.style.width = '60px';
            robotFingerTwo.style.marginBottom = '10px';
            robotFingerTwo.style.rotate = '15deg';

            robotFingerThree.style.display = 'none';
            robotFingerFour.style.display = 'none';

            //you paper
            yourFingerThree.style.display = 'block';
            yourFingerFour.style.display = 'block';

            yourFingerOne.style.borderBottomLeftRadius = '0';
            yourFingerOne.style.borderTopLeftRadius = '0';
            yourFingerOne.style.width = '55px';
            yourFingerOne.style.rotate = '0deg';
            yourFingerOne.style.marginBottom = '0px';
            yourFingerOne.style.rotate = '0deg';

            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.borderBottomLeftRadius = '0';
            yourFingerTwo.style.borderTopLeftRadius = '0';
            yourFingerTwo.style.width = '60px';
            yourFingerTwo.style.rotate = '0deg';
            yourFingerTwo.style.marginBottom = '0px';

            yourFingerThree.style.borderBottomLeftRadius = '0';
            yourFingerThree.style.borderTopLeftRadius = '0';
            yourFingerThree.style.width = '57px';
            yourFingerThree.style.rotate = '0deg';
            yourFingerThree.style.marginBottom = '0px';

            yourFingerFour.style.borderBottomLeftRadius = '0';
            yourFingerFour.style.borderTopLeftRadius = '0';
            yourFingerFour.style.width = '50px';
            yourFingerFour.style.rotate = '0deg';
            yourFingerFour.style.marginBottom = '0px';
        }
    },5000);
}

function scissor() {
    Choose3.style.display = 'block';
    button0.style.display = 'none';
    let rand1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand3 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let rand4 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    let a = (rand1 * rand2) / (rand3 + rand4);

    let final = Math.floor(a % 10);

    console.log(final);

    setTimeout(() => {
        displayElement('rock0');
        playAudioRock();
    }, 0);

    setTimeout(() => {
        hideElement('rock0');
        displayElement('paper0');
        playAudioPaper();
    }, 2000);

    setTimeout(() => {
        hideElement('paper0');
        displayElement('scissor0');
        playAudioScissor();
    }, 4000);

    setTimeout(() => {
        hideElement('scissor0');
    },5000);

    setTimeout(() => {
        if (final == 1 || final == 5 || final == 9) {
            console.log('Robot won the match');
            setTimeout(() => {
                updateScore();
                hands.style.display = 'none';
                youWon.style.display = 'none';
                robotWon.style.display = 'block';
                draw.style.display = 'none';
                playAgain.style.display = 'flex';
                robotChoose1.style.display = 'block';
                const audio = new Audio('robot.mp3');
                audio.play();
            },3000);
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            //robot rock
            robotFingerThree.style.display = 'block';
            robotFingerFour.style.display = 'block';

            robotFingerOne.style.borderBottomRightRadius = '50%';
            robotFingerOne.style.borderTopRightRadius = '50%';
            robotFingerOne.style.width = '25px';
            robotFingerOne.style.rotate = '0deg';
            robotFingerOne.style.marginBottom = '0px';
            robotFingerOne.style.rotate = '0deg';

            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.borderBottomRightRadius = '50%';
            robotFingerTwo.style.borderTopRightRadius = '50%';
            robotFingerTwo.style.width = '30px';
            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.marginBottom = '0px';

            robotFingerThree.style.borderBottomRightRadius = '50%';
            robotFingerThree.style.borderTopRightRadius = '50%';
            robotFingerThree.style.width = '27px';
            robotFingerThree.style.rotate = '0deg';
            robotFingerThree.style.marginBottom = '0px';

            robotFingerFour.style.borderBottomRightRadius = '50%';
            robotFingerFour.style.borderTopRightRadius = '50%';
            robotFingerFour.style.width = '20px';
            robotFingerFour.style.rotate = '0deg';
            robotFingerFour.style.marginBottom = '0px';

            //you scissor
            yourFingerOne.style.width = '60px';
            yourFingerOne.style.marginBottom = '10px';
            yourFingerOne.style.rotate = '15deg';

            yourFingerTwo.style.width = '60px';
            yourFingerTwo.style.marginBottom = '10px';
            yourFingerTwo.style.rotate = '-10deg';

            yourFingerThree.style.display = 'none';
            yourFingerFour.style.display = 'none';
        } else if (final == 2 || final == 6 || final == 7) {
            console.log('You won the match');
            setTimeout(() => {
                updateScoreYou();
                hands.style.display = 'none';
                youWon.style.display = 'block';
                robotWon.style.display = 'none';
                draw.style.display = 'none';
                playAgain.style.display = 'flex';
                robotChoose2.style.display = 'block';
                const audio = new Audio('wonMas.mp3');
                audio.play();
            },3000);
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            //robot paper
            robotFingerThree.style.display = 'block';
            robotFingerFour.style.display = 'block';

            robotFingerOne.style.borderBottomRightRadius = '0';
            robotFingerOne.style.borderTopRightRadius = '0';
            robotFingerOne.style.width = '55px';
            robotFingerOne.style.rotate = '0deg';
            robotFingerOne.style.marginBottom = '0px';
            robotFingerOne.style.rotate = '0deg';

            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.borderBottomRightRadius = '0';
            robotFingerTwo.style.borderTopRightRadius = '0';
            robotFingerTwo.style.width = '55px';
            robotFingerTwo.style.rotate = '0deg';
            robotFingerTwo.style.marginBottom = '0px';

            robotFingerThree.style.borderBottomRightRadius = '0';
            robotFingerThree.style.borderTopRightRadius = '0';
            robotFingerThree.style.width = '55px';
            robotFingerThree.style.rotate = '0deg';
            robotFingerThree.style.marginBottom = '0px';

            robotFingerFour.style.borderBottomRightRadius = '0';
            robotFingerFour.style.borderTopRightRadius = '0';
            robotFingerFour.style.width = '55px';
            robotFingerFour.style.rotate = '0deg';
            robotFingerFour.style.marginBottom = '0px';

            //you scissor
            yourFingerOne.style.width = '60px';
            yourFingerOne.style.marginBottom = '10px';
            yourFingerOne.style.rotate = '15deg';

            yourFingerTwo.style.width = '60px';
            yourFingerTwo.style.marginBottom = '10px';
            yourFingerTwo.style.rotate = '-10deg';

            yourFingerThree.style.display = 'none';
            yourFingerFour.style.display = 'none';
        } else if (final == 0 || final == 3 || final == 4 || final == 8){
            console.log("The match is draw.");
            setTimeout(() => {
                hands.style.display = 'none';
                youWon.style.display = 'none';
                robotWon.style.display = 'none';
                draw.style.display = 'block';
                playAgain.style.display = 'flex';
                robotChoose3.style.display = 'block';
                const audio = new Audio('draw.mp3');
                audio.play();
            },3000);
            yourHand.style.animation = 'none';
            robotHand.style.animation = 'none';
            //robot scissor
            robotFingerOne.style.borderBottomRightRadius = '0';
            robotFingerOne.style.borderTopRightRadius = '0';
            robotFingerOne.style.width = '60px';
            robotFingerOne.style.marginBottom = '10px';
            robotFingerOne.style.rotate = '-15deg';

            robotFingerTwo.style.borderBottomRightRadius = '0';
            robotFingerTwo.style.borderTopRightRadius = '0';
            robotFingerTwo.style.width = '60px';
            robotFingerTwo.style.marginBottom = '10px';
            robotFingerTwo.style.rotate = '15deg';

            robotFingerThree.style.display = 'none';
            robotFingerFour.style.display = 'none';

            //you scissor
            yourFingerOne.style.width = '60px';
            yourFingerOne.style.marginBottom = '10px';
            yourFingerOne.style.rotate = '15deg';

            yourFingerTwo.style.width = '60px';
            yourFingerTwo.style.marginBottom = '10px';
            yourFingerTwo.style.rotate = '-10deg';

            yourFingerThree.style.display = 'none';
            yourFingerFour.style.display = 'none';
        }
    },5000);

    
}

function play() {

    if (window.innerWidth <= 430) {
        hands.style.display = 'flex';
        br.style.display = 'block';
        button0.style.display = 'flex';
    } else {
        button0.style.display = 'flex';
        hands.style.display = 'flex';
        br.style.display = 'none';
    }
    youWon.style.display = 'none';
    robotWon.style.display = 'none';
    draw.style.display = 'none';

    robotChoose1.style.display = 'none';
    robotChoose2.style.display = 'none';
    robotChoose3.style.display = 'none';
    Choose1.style.display = 'none';
    Choose2.style.display = 'none';
    Choose3.style.display = 'none';

    robotHand.style.animation = 'hand infinite 2s';
    yourHand.style.animation = 'hand infinite 2s';

    robotFingerThree.style.display = 'block';
    robotFingerFour.style.display = 'block';

    robotFingerOne.style.borderBottomRightRadius = '50%';
    robotFingerOne.style.borderTopRightRadius = '50%';
    robotFingerOne.style.width = '25px';
    robotFingerOne.style.transform = 'rotate(0deg)';
    robotFingerOne.style.marginBottom = '0px';
    robotFingerOne.style.rotate = '0deg';

    robotFingerTwo.style.rotate = '0deg';
    robotFingerTwo.style.borderBottomRightRadius = '50%';
    robotFingerTwo.style.borderTopRightRadius = '50%';
    robotFingerTwo.style.width = '30px';
    robotFingerTwo.style.transform = 'rotate(0deg)';
    robotFingerTwo.style.marginBottom = '0px';

    robotFingerThree.style.borderBottomRightRadius = '50%';
    robotFingerThree.style.borderTopRightRadius = '50%';
    robotFingerThree.style.width = '27px';
    robotFingerThree.style.transform = 'rotate(0deg)';
    robotFingerThree.style.marginBottom = '0px';

    robotFingerFour.style.borderBottomRightRadius = '50%';
    robotFingerFour.style.borderTopRightRadius = '50%';
    robotFingerFour.style.width = '20px';
    robotFingerFour.style.transform = 'rotate(0deg)';
    robotFingerFour.style.marginBottom = '0px';

    yourFingerThree.style.display = 'block';
    yourFingerFour.style.display = 'block';

    yourFingerOne.style.borderBottomLeftRadius = '50%';
    yourFingerOne.style.borderTopLeftRadius = '50%';
    yourFingerOne.style.width = '25px';
    yourFingerOne.style.transform = 'rotate(0deg)';
    yourFingerOne.style.marginBottom = '0px';
    yourFingerOne.style.rotate = '0deg';

    yourFingerTwo.style.rotate = '0deg';
    yourFingerTwo.style.borderBottomLeftRadius = '50%';
    yourFingerTwo.style.borderTopLeftRadius = '50%';
    yourFingerTwo.style.width = '30px';
    yourFingerTwo.style.transform = 'rotate(0deg)';
    yourFingerTwo.style.marginBottom = '0px';

    yourFingerThree.style.borderBottomLeftRadius = '50%';
    yourFingerThree.style.borderTopLeftRadius = '50%';
    yourFingerThree.style.width = '27px';
    yourFingerThree.style.transform = 'rotate(0deg)';
    yourFingerThree.style.marginBottom = '0px';

    yourFingerFour.style.borderBottomLeftRadius = '50%';
    yourFingerFour.style.borderTopLeftRadius = '50%';
    yourFingerFour.style.width = '20px';
    yourFingerFour.style.transform = 'rotate(0deg)';
    yourFingerFour.style.marginBottom = '0px';

    playAgain.style.display = 'none';
    const audio = new Audio('again.mp3');
    audio.play();
}

function home(){
    window.location.href = "index.html";
}