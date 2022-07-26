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
    totalEl.textContent = totalGuesses++;
    const correctEl = document.getElementById(correctSpot + '-container');
    correctEl.classList.add('face');
    if (userGuess === correctSpot) {
        winsEl.textContent = correctGuesses++;    
    } else {
        lossesEl.textContent = incorrectGuesses++;
    }
    resetNow.addEventListener('click', () => {
        correctEl.classList.remove('face');
    });
}
