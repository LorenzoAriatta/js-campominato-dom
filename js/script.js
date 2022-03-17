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
    let bombs = [];
    console.log(bombs.id)
    while (bombs.length < 16) {
        const number = randomNumberGen(1, max);
        if (!bombs.includes(number)) {
            bombs.push(number);
        }
    }
    console.log('Le bombe sono: ' + bombs);
    return bombs;
}

// funzione per mostrare le bombs
function showBombs(bombsToShow) {
    const allCells = document.querySelectorAll('.cell');
    for (let i = 0; i < allCells.length; i++) {
        if (bombsToShow.includes(i + 1)) {
            const bombCell = allCells[i];
            bombCell.classList.add('bg-crimson');
            bombCell.innerText = 'BOOM!';
        }
    }
}


// funzione crate grid on click
function gridCreate(columns, rows) {
    columns;
    rows;

    const totalCells = columns * rows;

    grid.innerHTML = '';

    bombs = genBombs(totalCells);

    // ciclo crazione cells
    for (let i = 1; i <= totalCells; i++) {


        const cell = createCell();


        //const numInside = validNumber(1, totalCells, position);
        //position.push(numInside);

        cell.innerText = i;
        cell.id = 'cell-' + i;


        cell.addEventListener('click', function () {
            const thatsBomb = bombs.includes(i);
            if (thatsBomb) {
                showBombs(bombs);
                document.getElementById('gridCells').classList.add('pointer-none');
                //document.querySelector('.game-over').classList.remove('d-none', 'pointer-none');
            } else {
                cell.classList.add('bg-green');
            }
            console.log('Hai cliccato la ' + cell.id);
        })

        grid.appendChild(cell);

    }

}

// ---------- / FUNZIONI ---------- //

// dichiarazione grid
const grid = document.getElementById('gridCells');


// dichiarazione array bombs
let bombs = [];


// dichiarazioni buttons
const buttonEasy = document.getElementById('buttonEasy');
const buttonMedium = document.getElementById('buttonMedium');
const buttonHard = document.getElementById('buttonHard');
const restart = document.getElementById('restart');


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
