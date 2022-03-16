console.log('JS OK!');

// creare una griglia di gioco quadrata
// ogni cella contiene un numero in un range compreso tra 1 e 100

// BONUS
// difficoltà 1 => tra 1 e 100
// difficoltà 2 => tra 1 e 81
// difficoltà 3 => tra 1 e 49 

// ---------- FUNZIONI ---------- //

// funzione per creazione div cells
function createCell() {
    const singleCell = document.createElement('div');
    singleCell.classList.add('cell');
    return singleCell;
}

//funzione Random Number Generator
function randomNumberGen(min, max) {
    const range = (max - min) + 1;
    return Math.floor(Math.random() * range) + min;
}

//funzione generazione bombs
function genBombs(max) {
    let position = [];
    while (position.lenght < 16) {
        const number = randomNumberGen(1, max);
        if (!position.includes(number)) {
            position.push(number);
        }
        return position;
    }
}

//funzione per verificare se il num generato è valido
function validNumber(min, max, numberToCheck) {
    let number = randomNumberGen(min, max);
    while (numberToCheck.includes(number)) {
        number = randomNumberGen(min, max);
    }
    return number;
}

// funzione crate grid on click
function gridCreate(columns, rows) {

    columns;
    rows;

    const totalCells = columns * rows;

    grid.innerHTML = '';
    position = [];


    // ciclo crazione cells
    for (let i = 0; i < totalCells; i++) {


        const cell = createCell();

        const bombPosition = genBombs(16);
        console.log(bombPosition);

        const numInside = validNumber(1, totalCells, position);
        position.push(numInside);

        cell.innerText = i + 1;
        cell.id = 'cell-' + (i + 1);

        cell.addEventListener('click', function () {
            if (cell.innerText === 'cell-' + i) {
                cell.classList.add('bg-crimson');
            } else {
                cell.classList.add('bg-green');
            }
            console.log(cell.id);
        })

        grid.appendChild(cell);

    }

}

// ---------- / FUNZIONI ---------- //

// dichiarazione grid
const grid = document.getElementById('gridCells');

// dichiarazione array
let position = [];

// dichiarazioni buttons
const buttonEasy = document.getElementById('buttonEasy');
const buttonMedium = document.getElementById('buttonMedium');
const buttonHard = document.getElementById('buttonHard');


// event click on buttons
// easy
buttonEasy.addEventListener('click', function () {

    grid.classList.add('calc-diff1');
    grid.classList.remove('calc-diff2', 'calc-diff3')

    gridCreate(10, 10);
})

// medium
buttonMedium.addEventListener('click', function () {

    grid.classList.add('calc-diff2');
    grid.classList.remove('calc-diff1', 'calc-diff3')

    gridCreate(9, 9);

})

// hard
buttonHard.addEventListener('click', function () {

    grid.classList.add('calc-diff3');
    grid.classList.remove('calc-diff1', 'calc-diff2')

    gridCreate(7, 7);

})