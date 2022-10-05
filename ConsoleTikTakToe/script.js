const PLAYER_X_CLASS = 'X';
const PLAYER_O_CLASS = 'O';
const allCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let playerXCells = [];
let playerOCells = [];
let alreadySetCells = [];
let playerXTurn = true;
let draw = false;
let gameWon = false;

startGame();


/**
 * Startet das Spiel und lässt das Spielfeld aufräumen.
 */
function startGame() {
    resetBoard();
}

/**
 * Setzt das Board zurück sodass alle Felder wieder leer sind. 
 */
function resetBoard() {
    playerOCells = [];
    playerXCells = [];
    availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    playerXTurn = true;
    draw = false;
    gameWon = false;
}

/**
 * Überprüft ob SpielerX am Zug ist, wenn das der Fall ist wird setCell(), mit der entsprechenden Zelle ausgeführt.
 * @param {number} cell 
 */
function setPlayerX(cell) {
    if (playerXTurn == false) {
        console.log("Player O ist am Zug");
    } else {
        setCell(cell);

    }
    if (checkWinPlayerX() === true) {
        console.log('PlayerX hat gewonnen!')
        gameWon = true;
    }
    printPattern()
}

/**
 * Überprüft ob SpielerO am Zug ist, wenn das der Fall ist wird setCell(), mit der entsprechenden Zelle ausgeführt.
 * @param {number} cell 
 */
function setPlayerO(cell) {
    if (playerXTurn == true) {
        console.log('Spieler X ist am Zug')
    } else {
        setCell(cell);
    }
    if (checkWinPlayerO() === true) {
        console.log('PlayerO hat gewonnen')
        gameWon = true;
    } else {

    }
    printPattern()
}

/**
 * Funktion die überprüft ob die Eingabe korrekt ist und das eingegebene Feld noch verfügbar ist.
 * Wenn das Feld frei ist, wird die dazugehörige Zahl aus dem Array availableCells gestrichen und dem Array des jeweiligen Spielers hinzugefügt.
 * @param {number} cell 
 */
function setCell(cell) {
    if (!cell == Number || 0 > cell > 9) {
        console.log("Ein Feld mit einer Zahl zwischen 0 und 8 auswählen")
    } else if (!availableCells.includes(cell)) {
        console.log("Die Zelle ist nicht frei, hier sind alle möglichen Felder: ", availableCells)
    } else {
        alreadySetCells.push(cell);
        for (let index = 0; index < availableCells.length; index++) {
            if (availableCells[index] === cell) {
                availableCells.splice(index, 1);
            }
        }
        checkDraw();
        if (playerXTurn == true) {
            playerXCells.push(cell);
        } else {
            playerOCells.push(cell);
        }
        playerXTurn = !playerXTurn;
    }
    if (gameWon === true) {
    } else if (draw === true) {
        console.log('unendschieden');
    }
}

/**
 * Überprüft ob das Spiel unentschieden ist. 
 */
function checkDraw() {
    if (availableCells.length == 0) {
            draw = true;
    }
}

/**
 * Funktion um die belegten Zellen von beiden Spielern und alle noch freien Felder auslesen zu lassen.
 */
function stateOfBoard() {
    console.log("Felder von Spieler X: ", playerXCells);
    console.log("Felder von Spieler O: ", playerOCells);
    console.log("Alle verfügbaren Felder: ", availableCells);
}

/**
 * Funktion, welche das Array eines Spielers überprüft ob es eine mögliche Gewinnkombination enthält.
 * Bei Sieg gibt es den Wert 'true' zurück ansonsten 'false'.
 * ToDo Ohne 'some' oder 'every'
 */
function checkWinPlayerX() {
    return WINNING_COMBINATIONS.some(winningCombination => {
        return winningCombination.every(index => {
            return playerXCells.includes(index); 
        })
    })
}
/**
 * Überprüft ob PlayerO gewonnen hat.
 */
function checkWinPlayerO() {
    return WINNING_COMBINATIONS.some(winningCombination => {
        return winningCombination.every(index => {
            return playerOCells.includes(index);
        })
    })
}
/**
 * Zeigt das Spielfeld in der Console. 
 */
function printPattern() {
    console.log(' ' + setSymbols(0) + ' | ' + setSymbols(1) + ' | ' + setSymbols(2) + ' ');
    console.log('___|___|___')
    console.log(' ' + setSymbols(3) + ' | ' + setSymbols(4) + ' | ' + setSymbols(5) + ' ');
    console.log('___|___|___')
    console.log(' ' + setSymbols(6) + ' | ' + setSymbols(7) + ' | ' + setSymbols(8) + ' ');
    console.log('   |   |   ');
    console.log(' ');
}

/**
 * Die Funktion überprüft ob das entsprechende Feld von einem Spieler vergeben ist und gibt es mit dem entsprechenden Symbol wieder.
 * @param {number} index 
 */
function setSymbols(index) {
    if (playerXCells.includes(index)) {
        return 'X'
    } else if (playerOCells.includes(index)) {
        return 'O'
    } else {
        return " "
    }
}
// Test Züge 
// 7 und 1 veränden um zwischen unendschieden und Win zu ändern 
/*
setPlayerX(5);
setPlayerO(2);
setPlayerX(6);
setPlayerO(7);
setPlayerX(1);
setPlayerO(4);
setPlayerX(8);
setPlayerO(0);
setPlayerX(3);
*/