const ALLCELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let gameWon = false;
let allowMove = false;

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
            if (!gameWon && !checkDraw()) {
                setSymbolUI(index)
                printPattern()
                console.log('Jetzt ist Spieler O am Zug');
            }
        } else if (!gameWon) {
            setCell(index);
            if (!gameWon && !checkDraw()) {
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

    if (checkWinPlayer(playerOCells, playerXCells)) {
        gameWon = true;
        allowMove = false;
        startingConfetti();
        stoppingConfetti();
        if (playerXTurn) {
            printPattern();
            toastPlaxerXWin();
            console.log('PlayerX hat gewonnen!');
        } else {
            printPattern();
            toastPlaxerOWin();
            console.log('PlayerO hat gewonnen!');
        }
        console.log('Bitte setzte das Spielfeld mit "resetBoard()" zurück.');

    }

    playerXTurn = !playerXTurn;
    setSymbolUI(cell);

    if (checkDraw() && !gameWon) {
        toastUnentschieden();
        console.log('Unentschieden!');
        console.log('Bitte setze das Spielfeld mit "resetBoard()" zurück.');
    }
}

/**
 * Überprüft, ob das Spiel unentschieden ist.
 * @returns {boolean}
 */
function checkDraw() {
    return availableCells.length === 0 && !gameWon;
}
