/**
 * Setzt die Farbe in den Feldern zurück
 */
function resetCellColors() {
    for (let index = 0; index < 9; index++) {
        document.getElementById(index).style.backgroundColor = "#aca8a897";
    }
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

