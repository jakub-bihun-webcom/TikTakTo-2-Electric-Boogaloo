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
 * Überprüft ob das entsprechende Feld von einem Spieler vergeben ist und gibt es mit dem entsprechendem Symbol wieder.
 * @param {number} index Die Aufgerufene Wert in printPattern()
 */
function setSymbolsConsole(index) {
    if (playerXCells.includes(index)) {
        return 'X';
    } else if (playerOCells.includes(index)) {
        return 'O';
    } else {
        return ' ';
    }
}
