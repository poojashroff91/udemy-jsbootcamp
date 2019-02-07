import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#hangman-word');
const statusEl = document.querySelector('#status');
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.textContent = game1.puzzle;
    statusEl.textContent = game1.statusMessage;
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render();
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()