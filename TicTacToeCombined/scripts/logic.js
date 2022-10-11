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
    resetCellColors();
    // console.clear();
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
