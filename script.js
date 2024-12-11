let score = 0;
let gameInterval;
let crashTime = 5;  // Время до краша в секундах

const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-game');
const gameScreen = document.getElementById('game-screen');

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    scoreElement.innerText = score;
    startButton.disabled = true;
    gameScreen.style.backgroundColor = '#f0f0f0';
    gameInterval = setInterval(gameLoop, 1000);
    setTimeout(() => {
        gameScreen.style.backgroundColor = 'red'; // Симуляция краша
        alert('Game Over! Crash!');
        startButton.disabled = false;
        clearInterval(gameInterval);
    }, crashTime * 1000);
}

function gameLoop() {
    score++;
    scoreElement.innerText = score;
    if (score % 10 === 0) {
        crashTime -= 0.5;  // Уменьшаем время до краша
    }
}
