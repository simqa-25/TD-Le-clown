
// let score = 0;
// const clown = document.getElementById('clown');
// const scoreDisplay = document.getElementById('score');
// const difficultySelect = document.getElementById('difficulty');
// let difficulty = difficultySelect.options[difficultySelect.selectedIndex].value;

// let interval;

// // Durées d'affichage en millisecondes pour chaque difficulté
// const displayTimes = {
//     easy: 1500,   // 1.5 secondes
//     medium: 1000, // 1 seconde
//     hard: 500     // 0.5 seconde
// };

// // Fonction pour déplacer le clown
// function moveClown() {
//     const container = document.querySelector('.game-container');
//     const maxX = container.clientWidth - clown.clientWidth;
//     const maxY = container.clientHeight - clown.clientHeight;

//     const randomX = Math.floor(Math.random() * maxX);
//     const randomY = Math.floor(Math.random() * maxY);

//     clown.style.left = randomX + 'px';
//     clown.style.top = randomY + 'px';
//     clown.style.display = 'block'; // Afficher le clown
// }

// // Fonction pour gérer le temps d'affichage du clown en fonction de la difficulté
// function setClownDisplayTime() {
//     const displayTime = displayTimes[difficulty] || displayTimes.easy; // Valeur par défaut
//     console.log(displayTime)
//     // Déplacer le clown à chaque intervalle défini
//     clearInterval(interval);
//     interval = setInterval(() => {
//         clown.style.display = 'none'; // Cacher le clown
//         setTimeout(() => {
//             moveClown();
//         }, 100); // Petite pause avant de le déplacer
//     }, displayTime);
// }

// // Événement au clic sur le clown
// clown.onclick = function() {
//     score++;
//     scoreDisplay.innerText = "Score: " + score;
//     moveClown();
// };

// // Initialiser le clown à une position aléatoire
// moveClown();
// setClownDisplayTime();

// difficultySelect.addEventListener('change', () => {
//     difficulty = difficultySelect.options[difficultySelect.selectedIndex].value;
//     score = 0;
//     scoreDisplay.innerText = "Score: " + score;
//     moveClown();
//     setClownDisplayTime();
// })

let score = 0;
const clown = document.getElementById('clown');
const scoreDisplay = document.getElementById('score');
const difficultySelect = document.getElementById('difficulty');
const mainMenu = document.getElementById('main-menu');
const gameContainer = document.querySelector('.game-container');
let difficulty = difficultySelect.options[difficultySelect.selectedIndex].value;

let interval;

const displayTimes = {
    easy: 1500,
    medium: 1000,
    hard: 500
};

function moveClown() {
    const container = document.querySelector('.game-container');
    const maxX = container.clientWidth - clown.clientWidth;
    const maxY = container.clientHeight - clown.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    clown.style.left = randomX + 'px';
    clown.style.top = randomY + 'px';
    clown.style.display = 'block'; // Afficher le clown
}

function setClownDisplayTime() {
    const displayTime = displayTimes[difficulty] || displayTimes.easy;
    clearInterval(interval);
    interval = setInterval(() => {
        clown.style.display = 'none';
        setTimeout(() => {
            moveClown();
        }, 100);
    }, displayTime);
}

clown.onclick = function() {
    score++;
    scoreDisplay.innerText = "Score: " + score;
    moveClown();
};

function startGame() {
    score = 0;
    scoreDisplay.innerText = "Score: " + score;
    mainMenu.style.display = 'none';
    gameContainer.style.display = 'block';
    moveClown();
    setClownDisplayTime();
}

document.getElementById('play-button').addEventListener('click', startGame);
document.getElementById('settings-button').addEventListener('click', () => {
    alert("Paramètres à venir..."); // Ajoutez votre gestion des paramètres ici
});
document.getElementById('quit-button').addEventListener('click', () => {
    if (confirm("Voulez-vous vraiment quitter le jeu ?")) {
        window.close(); // Peut ne pas fonctionner sur tous les navigateurs
    }
});

difficultySelect.addEventListener('change', () => {
    difficulty = difficultySelect.options[difficultySelect.selectedIndex].value;
    score = 0;
    scoreDisplay.innerText = "Score: " + score;
    moveClown();
    setClownDisplayTime();
});
