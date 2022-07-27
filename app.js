/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
let totalEl = document.getElementById('total');
let lossesEl = document.getElementById('losses');
let winsEl = document.getElementById('wins');
const resetNow = document.getElementById('reset-now');

const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 1;
let totalGuesses = 1;
let incorrectGuesses = 1;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');

});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');

});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    resetStyles();
    const correctEl = document.getElementById(correctSpot + '-container');
    correctEl.classList.add('face');
    if (userGuess === correctSpot) {
        winsEl.textContent = correctGuesses++;
    } else {
        lossesEl.textContent = incorrectGuesses++;
    }
    totalEl.textContent = totalGuesses++;
}

function resetStyles() {
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    shedContainer.classList.remove('face');
}

resetNow.addEventListener('click', () => {
    resetStyles();
    winsEl.textContent = 0;
    totalEl.textContent = 0;
    lossesEl.textContent = 0;
});
