/**
 * Lässt den Spieler die aktuell belegten und noch freien Felder anzeigen
 */
function stateOfBoard() {
    console.log("Felder von Spieler X: ", playerXCells);
    console.log("Felder von Spieler O: ", playerOCells);
    console.log("Alle verfügbaren Felder: ", availableCells);
}
