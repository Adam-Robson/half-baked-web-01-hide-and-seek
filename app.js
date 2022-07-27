/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');
const resetNow = document.getElementById('reset-now');

const hidingPlaces = ['tree', 'shed', 'boulder'];

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
        winsEl.textContent++;
    } else {
        lossesEl.textContent++;
    }
    totalEl.textContent++;
}

function resetStyles() {
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    shedContainer.classList.remove('face');
}

resetNow.addEventListener('click', () => {
    resetStyles();
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    totalEl.textContent = 0;
});
