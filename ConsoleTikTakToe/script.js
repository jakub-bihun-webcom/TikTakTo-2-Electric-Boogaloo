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

startGame();


/**
 * Startet das Spiel und lässt das Spielfeld aufräumen.
 */

function startGame() {
    resetBoard();
    console.log("Mit choosePlayerStart() auswählen welcher Spieler anfängt.");
    console.log("Für Spieler X [1] eingeben und für Spieler O [2] eingeben.");
}

/**
 * Setzt das Board zurück sodass alle Felder wieder leer sind. 
 */

function resetBoard() {
    playerOCells = [];
    playerXCells = [];
    availableCells = [...ALLCELLS];
    playerXTurn = true;
    isDraw = false;
    gameWon = false;
}

/**
 * Gibt die belegten Felder von beiden Spielern und alle freien Felder auf der Konsole aus
 * @param {number} token 
 */

function choosePlayerStart(token) {
    if (token === 1) {
        playerXTurn = true;
        console.log("Spieler X fängt an.");
    } else if (token == 2) {
        playerXTurn = false;
        console.log("Spieler O fängt an.");
    } else {
        console.log("Bitte 1 für X oder 2 für O eingeben.");
    }
}

/**
 * Überprüft ob SpielerX am Zug ist und setzt Martkierung in das entsprechende Feld.
 * @param {number} cell 
 */

function setPlayerX(cell) {
    if (!playerXTurn) {
        throw new Error("Player O ist am Zug!");
    } else {
        setCell(cell);
    }
    if (checkWinPlayer() === true) {
        console.log('PlayerX hat gewonnen!');
        gameWon = true;
    }

    printPattern()
}

/**
 * Überprüft ob SpielerX am Zug ist und setzt Martkierung in das entsprechende Feld.
 * @param {number} cell 
 */

function setPlayerO(cell) {
    if (playerXTurn === true) {
        throw new Error('Spieler X ist am Zug!')
    } else {
        setCell(cell);
    }
    if (checkWinPlayer() === true) {
        console.log('PlayerO hat gewonnen!')
        gameWon = true;
    }
    printPattern()
}

/**
 * Überprüft ob die Eingabe korrekt ist und das eingegebene Feld noch verfügbar ist.
 * Bei erfolgreicher Überprüfung wird das Feld im Array des Spilers gepushed. 
 * @param {number} cell 
 */

function setCell(cell) {
    if (!cell === Number || 0 > cell > 9) {
        throw new Error("Ein Feld mit einer Zahl zwischen 0 und 8 auswählen.")
    } else if (!availableCells.includes(cell)) {
        let availableCellString = availableCells.toString();
        console.log(availableCellString);
        throw new Error("Das Feld ist nicht frei, hier sind alle möglichen Felder: " + availableCellString)
    } else {
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
        playerXTurn = !playerXTurn;
    }
    if (isDraw === true) {
        console.log('Unentschieden!');
    }
}

/**
 * Überprüft ob das Spiel unentschieden ist. 
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
 * Überprüft ob eine Gewinnkombination vorhanden ist. 
 * Bei Sieg gibt es den Wert 'true' zurück ansonsten 'false'.
 * ToDo Ohne 'some' oder 'every'
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
 * Setzt eine Markierung für den Spieler der grade am Zzug ist
 * @param {number} index Das Feld, dass in die Console eingegeben wird 
 */

function move(index) {
    if (playerXTurn && !gameWon) {
        setPlayerX(index)
        console.log('Jetzt ist Spieler O am Zug')
    } else if (!gameWon){
        setPlayerO(index)
        console.log('Jetzt ist Spieler X am Zug')
    }
}



/**
 * Zeigt das Spielfeld in der Console. 
 */

function printPattern() {
    console.log(' ' + setSymbols(0) + ' | ' + setSymbols(1) + ' | ' + setSymbols(2) + ' ');
    console.log('———|———|———')
    console.log(' ' + setSymbols(3) + ' | ' + setSymbols(4) + ' | ' + setSymbols(5) + ' ');
    console.log('———|———|———')
    console.log(' ' + setSymbols(6) + ' | ' + setSymbols(7) + ' | ' + setSymbols(8) + ' ');
    console.log(' ');
}

/**
 * Überprüft ob das entsprechende Feld von einem Spieler vergeben ist und gibt es mit dem entsprechenden Symbol wieder.
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
