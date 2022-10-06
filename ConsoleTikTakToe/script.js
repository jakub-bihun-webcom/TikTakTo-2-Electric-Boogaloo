const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const ALLCELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let availableCells = [];

let playerXCells = [];
let playerOCells = [];
let playerXTurn;
let isDraw = false;
let gameWon = false;
let allowMove = false;

startGame();


function startGame() {
    resetBoard();
}


function resetBoard() {
    playerOCells = [];
    playerXCells = [];
    availableCells = [...ALLCELLS];
    playerXTurn = true;
    isDraw = false;
    gameWon = false;
    console.clear();
    console.log("Mit choosePlayerStart() auswählen welcher Spieler anfangen soll.");
    console.log("Für Spieler X [1] eingeben und für Spieler O [2] eingeben.");
}


function choosePlayerStart(token) {
    if (token === 1) {
        playerXTurn = true;
        console.log("Spieler X fängt an.");
        allowMove = true;
    } else if (token === 2) {
        playerXTurn = false;
        console.log("Spieler O fängt an.");
        allowMove = true;
    } else {
        console.log("Bitte 1 für Spieler X oder 2 für Spieler O eingeben.");
    }
}


function setPlayerX(cell) {
    if (allowMove) {
        if (!playerXTurn) {
            throw new Error("Player O ist am Zug!");
        } else {
            setCell(cell);
        }
        printPattern();
    } else {
        throw new Error('Bitte wähle zuerst einen Spieler aus, der anfangen soll.');
    }
}


function setPlayerO(cell) {
    if (allowMove) {
        if (playerXTurn === true) {
            throw new Error('Spieler X ist am Zug!');
        } else {
            setCell(cell);
        }
        printPattern();
    } else {
        throw new Error('Bitte wähle zuerst einen Spieler aus, der anfangen soll.');
    }
}


function setCell(cell) {
    if (!allowMove) {
        throw new Error('Bitte wähle zuerst einen Spieler aus, der anfangen soll.');
    }

    if (typeof cell !== "number" || 0 > cell > 9) {
        throw new Error("Ein Feld mit einer Zahl zwischen 0 und 8 auswählen.");
    }

    if (!availableCells.includes(cell)) {
        let availableCellString = availableCells.toString();
        console.log(availableCellString);
        throw new Error("Das Feld ist nicht frei, hier sind alle möglichen Felder: " + availableCellString);
    }

    for (let index = 0; index < availableCells.length; index++) {
        if (availableCells[index] === cell) {
            availableCells.splice(index, 1);
        }
    }

    checkDraw();

    if (playerXTurn === true) {
        playerXCells.push(cell);
    } else {
        playerOCells.push(cell);
    }

    if (checkWinPlayer() === true) {
        gameWon = true;
        allowMove = false;
        if (playerXTurn) {
            console.log('PlayerX hat gewonnen!');
        } else {
            console.log('PlayerO hat gewonnen!');
        }
        console.log('Bitte setzte das Spielfeld mit "resetBoard()" zurück.');
    }

    playerXTurn = !playerXTurn;

    if (isDraw) {
        console.log('Unentschieden!');
        console.log('Bitte setzte das Spielfeld mit "resetBoard()" zurück.');
    }
}

/**
 * Überprüft, ob das Spiel unentschieden ist.
 */
function checkDraw() {
    if (availableCells.length === 0 && !gameWon) {
        isDraw = true;
    }
}

/**
 * Lässt den Spieler die aktuell belegten und noch freien Felder anzeigen
 */

function stateOfBoard() {
    console.log("Felder von Spieler X: ", playerXCells);
    console.log("Felder von Spieler O: ", playerOCells);
    console.log("Alle verfügbaren Felder: ", availableCells);
}

/**
 * Überprüft ob eine Gewinnkombination in dem Array von Spieler X oder Spieler O vorhanden ist.
 * Bei einem Sieg gibt es den Wert 'true' zurück, ansonsten den Wert 'false'.
 * ------ToDo ohne 'some' oder 'every'--------
 */
function checkWinPlayer() {
    return WINNING_COMBINATIONS.some(winningCombination => {
        return winningCombination.every(index => {
            if (playerXTurn === true) {
                return playerXCells.includes(index);
            } else {
                return playerOCells.includes(index);
            }
        })
    })
}

/**
 * Setzt eine Markierung für den Spieler, welcher gerade am Zug ist.
 * @param {number} index Das Feld, dass in die Konsole eingegeben wird.
 */
function move(index) {
    if (allowMove) {
        if (playerXTurn && !gameWon) {
            setPlayerX(index);
            if (!gameWon && !isDraw) {
                console.log('Jetzt ist Spieler O am Zug');
            }
        } else if (!gameWon) {
            setPlayerO(index);
            if (!gameWon && !isDraw) {
                console.log('Jetzt ist Spieler X am Zug');
            }
        }
    } else if (gameWon) {
        throw new Error('Bitte setzte das Spielfeld mit "resetBoard()" zurück.');
    } else {
        throw new Error('Bitte wähle zuerst einen Spieler aus, der anfangen soll.');
    }
}

/**
 * Zeigt das Spielfeld in der Konsole an.
 */
function printPattern() {
    console.log(' ' + setSymbols(0) + ' | ' + setSymbols(1) + ' | ' + setSymbols(2) + ' ');
    console.log('———|———|———');
    console.log(' ' + setSymbols(3) + ' | ' + setSymbols(4) + ' | ' + setSymbols(5) + ' ');
    console.log('———|———|———');
    console.log(' ' + setSymbols(6) + ' | ' + setSymbols(7) + ' | ' + setSymbols(8) + ' ');
    console.log(' ');
}

/**
 * Überprüft ob das entsprechende Feld von einem Spieler vergeben ist und gibt es mit dem entsprechendem Symbol wieder.
 * @param {number} index
 */
function setSymbols(index) {
    if (playerXCells.includes(index)) {
        return 'X';
    } else if (playerOCells.includes(index)) {
        return 'O';
    } else {
        return " ";
    }
}

/**
 * Wechselt die Farben des Info Feldes.
 */
function switchMode() {
    document.getElementById("infoFeld").style.color = "white";
    document.getElementById("infoFeld").style.backgroundColor = "#3e3d3dd7";
}

//Hier ein paar Tests, um diese auszuführen einfach vor dem Test das "/*" und hinter dem Test das "*/" entfernen

// Gewonnen mit dem setPlayer_() Befehl 
/*
choosePlayerStart(1)
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

// Unentschieden mit dem setPlayer_() Befehl
/*
choosePlayerStart(1)
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

// Gewonnen mit dem move() Befehl
/*
choosePlayerStart(2)
move(2)
move(5)
move(1)
move(8)
move(0)
*/

// Unentschieden mit dem move() Befehl
/*
choosePlayerStart(1)
move(4)
move(6)
move(8)
move(0)
move(3)
move(5)
move(1)
move(7)
move(2)
*/
