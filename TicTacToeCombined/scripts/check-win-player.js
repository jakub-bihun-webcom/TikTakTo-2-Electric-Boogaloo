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