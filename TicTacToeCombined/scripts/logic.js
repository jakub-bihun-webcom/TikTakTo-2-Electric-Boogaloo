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

/**
 * Startet das Spiel und führt die Funktionen resetBoard() aus.
 */
startGame();

function startGame() {
    resetBoard();
}

/**
 * Setzt das Board auf den Anfangsstatus zurück. Alle Arrays und booleans werden zurückgesetzt.
 */
function resetBoard() {
    playerOCells = [];
    playerXCells = [];
    availableCells = [...ALLCELLS];
    playerXTurn = true;
    isDraw = false;
    gameWon = false;
    allowMove = true;
    document.getElementById("0").style.backgroundColor = "#aca8a897";
    document.getElementById("1").style.backgroundColor = "#aca8a897";
    document.getElementById("2").style.backgroundColor = "#aca8a897";
    document.getElementById("3").style.backgroundColor = "#aca8a897";
    document.getElementById("4").style.backgroundColor = "#aca8a897";
    document.getElementById("5").style.backgroundColor = "#aca8a897";
    document.getElementById("6").style.backgroundColor = "#aca8a897";
    document.getElementById("7").style.backgroundColor = "#aca8a897";
    document.getElementById("8").style.backgroundColor = "#aca8a897";
    console.clear();
}

/**
 * Setzt eine Markierung für den Spieler, welcher gerade am Zug ist.
 * @param {number} index Das Feld, dass in die Konsole eingegeben wird.
 */
function move(index) {
    if (allowMove) {
        if (playerXTurn && !gameWon) {
            setCell(index);
            if (!gameWon && !isDraw) {
                setSymbolUI(index)
                printPattern()
                console.log('Jetzt ist Spieler O am Zug');
            }
        } else if (!gameWon) {
            setCell(index);
            if (!gameWon && !isDraw) {
                setSymbolUI(index)
                printPattern()
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
 * Überprüft ob die Eingabe eine Zahl zwischen 0 und 8 ist und das eingegebene Feld noch verfügbar ist.
 * Bei erfolgreicher Überprüfung wird das Feld in das Array des Spielers gepushed.
 * @param {number} cell
 */
function setCell(cell) {
    if (!allowMove) {
        throw new Error('Bitte wähle zuerst einen Spieler aus, der anfangen soll.');
    }

    if (typeof cell !== "number" || 0 > cell > 9) {
        throw new Error("Ein Feld mit einer Zahl zwischen 0 und 8 auswählen.");
    }

    if (!availableCells.includes(cell)) {
        const availableCellString = availableCells.join(", ");
        console.log(availableCellString);
        throw new Error("Das Feld ist nicht frei, hier sind alle möglichen Felder: " + availableCellString);
    }

    for (let index = 0; index < availableCells.length; index++) {
        if (availableCells[index] === cell) {
            availableCells.splice(index, 1);
        }
    }

    if (playerXTurn) {
        playerXCells.push(cell);
    } else {
        playerOCells.push(cell);
    }

    checkDraw();

    if (checkWinPlayer(playerOCells, playerXCells)) {
        gameWon = true;
        allowMove = false;
        if (playerXTurn) {
            printPattern()
            console.log('PlayerX hat gewonnen!');
        } else {
            printPattern()
            console.log('PlayerO hat gewonnen!');
        }
        console.log('Bitte setzte das Spielfeld mit "resetBoard()" zurück.');
    }

    playerXTurn = !playerXTurn;

    if (isDraw && !gameWon) {
        console.log('Unentschieden!');
        console.log('Bitte setzte das Spielfeld mit "resetBoard()" zurück.');
    }
}

/**
 * Zeigt das Spielfeld in der Konsole an.
 */
function printPattern() {
    console.log(' ' + setSymbolsConsole(0) + ' | ' + setSymbolsConsole(1) + ' | ' + setSymbolsConsole(2) + ' ');
    console.log('———|———|———');
    console.log(' ' + setSymbolsConsole(3) + ' | ' + setSymbolsConsole(4) + ' | ' + setSymbolsConsole(5) + ' ');
    console.log('———|———|———');
    console.log(' ' + setSymbolsConsole(6) + ' | ' + setSymbolsConsole(7) + ' | ' + setSymbolsConsole(8) + ' ');
    console.log(' ');
}

/**
 * Die Funktion setzt die Hintergrundfarbe für das entsprechende angesprochene Feld
 */
function setSymbolUI(index) {
    if (!playerXTurn) {
        document.getElementById(index).style.backgroundColor = '#981237';
    } else {
        document.getElementById(index).style.backgroundColor = '#696969';
    }
}
/**
 * Überprüft ob das entsprechende Feld von einem Spieler vergeben ist und gibt es mit dem entsprechendem Symbol wieder.
 * @param {number} index Die Aufgerufene Wert in printPattern()
 */
function setSymbolsConsole(index) {
    if (playerXCells.includes(index)) {
        return 'X';
    } else if (playerOCells.includes(index)) {
        return 'O';
    } else {
        return " ";
    }
}
/**
 * Gibt die Arrays in der Console wieder 
 */
function stateOfBoard() {
    console.log("Felder von Spieler X: ", playerXCells);
    console.log("Felder von Spieler O: ", playerOCells);
    console.log("Alle verfügbaren Felder: ", availableCells);
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
 * Überprüft ob eine Gewinnkombination in dem Array von Spieler X oder Spieler O vorhanden ist.
 * Dabei wird das Array der Gewinnkombinationen mit einer for-Schleife aufgeteilt und die 3 verbleibenden Zahlen
 * der Gewinnreihe werden mit den Feldern beider Spieler abgeglichen.
 * @return {boolean} Gibt true zurück wenn eine Gewinnkombination übereinstimmt, ansonsten wird false zurückgegeben.
 */
function checkWinPlayer(playerOCells, playerXCells) {
    for (let winningCombinationIndex = 0; winningCombinationIndex < WINNING_COMBINATIONS.length; winningCombinationIndex++) {
        const winningCombination = WINNING_COMBINATIONS[winningCombinationIndex];
        for (let number = 0; number < winningCombination.length; number++) {
            if (playerXTurn && checkWinRow(playerXCells, winningCombination)) {
                return true;
            } else if (checkWinRow(playerOCells, winningCombination)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Funktion testet, ob das übergebene Array eine Gewinnkombination beinhaltet.
 * @param {number[]} playerCells
 * @param {number[]} winningCombination
 * @returns {boolean}
 */
function checkWinRow(playerCells, winningCombination) {
    return playerCells.includes(winningCombination[0])
        && playerCells.includes(winningCombination[1])
        && playerCells.includes(winningCombination[2]);
}

/**
 * Testfunktion für die checkWin Funktion. Es werden mehrere Testfälle durchgegeben und überprüft ob das erwartete Ergebnis mit dem herausgekommenen Ergebnis übereinstimmt.
 * @param {number[]} playerOCells Array mit den von PlayerO gesetzten Feldern 
 * @param {number[]} playerXCells Array mit den von PlayerX gesetzten Feldern 
 * @param {boolean} expectedResult Wenn der test erfolgreich war wird dieser Boolean auf true gesetzt 
 */
function testCheckWin(playerOCells, playerXCells, expectedResult) {
    const actualResult = checkWinPlayer(playerOCells, playerXCells);
    if (actualResult === expectedResult) {
    } else {
        console.error("Falsches Ergebnis! erwartet: " + expectedResult + ", tatsächlich: " + actualResult);
    }
}

// Testfälle für checkWin
testCheckWin([1, 4, 6, 8], [0, 2, 3, 5, 7], false);
testCheckWin([0, 1, 2], [3, 4], true);
testCheckWin([], [], false);
testCheckWin([0, 1, 6], [3, 4, 5], true);
