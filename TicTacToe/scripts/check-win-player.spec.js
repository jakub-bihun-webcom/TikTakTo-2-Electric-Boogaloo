/**
 * Testfunktion für die checkWin Funktion. Es werden mehrere Testfälle durchgegeben und überprüft ob das erwartete Ergebnis mit dem herausgekommenen Ergebnis übereinstimmt.
 * @param {number[]} playerOCells Array mit den von PlayerO gesetzten Feldern
 * @param {number[]} playerXCells Array mit den von PlayerX gesetzten Feldern
 * @param {boolean} expectedResult Wenn der test erfolgreich war wird dieser Boolean auf true gesetzt
 */
function testCheckWin(playerOCells, playerXCells, expectedResult) {
    const actualResult = checkWinPlayer(playerOCells, playerXCells);
    if (actualResult === expectedResult) {
        console.log('√');
    } else {
        console.error('Falsches Ergebnis! erwartet: ' + expectedResult + ', tatsächlich: ' + actualResult);
    }
}

// Testfälle für checkWin
testCheckWin([1, 4, 6, 8], [0, 2, 3, 5, 7], false);
testCheckWin([0, 1, 2], [3, 4], true);
testCheckWin([], [], false);
testCheckWin([0, 1, 6], [3, 4, 5], true);
