const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let playerXCells = [];
let playerOCells = [];
let alreadySetCells = [];
let playerXTurn = true;

startGame();
/**
 * Nur ein Ansatz das Feld in der Konsoe auszugeben
 */
function printPattern() {
console.log(' X | O | X ')
console.log('___|___|___')
console.log(' O | X | O ')
console.log('___|___|___')
console.log(' X | O | X ')
console.log('   |   |   ')
}
/**
 * Soll hinterher das printPattern() an die Aktuelle situation anpassen
 */
function adaptPattern() {
    
} 

/**
 * Startet das Spiel und lässt das Spielfeld aufräumen
 */
function startGame(){
    resetBoard();
}
/**
 * Setzt das Bord zurück sodass alle Felder wieder leer sind 
 */
function resetBoard(){
    playerOCells = [];
    playerXCells = [];
    allCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    playerXTurn = true;

}

/**
 * Funktion um die belegten Zellen von beiden Spielern 
 * und alle noch freien Felder auslesen zu lassen.
 */
function stateOfBoard(){
    console.log("Felder von Spieler X", playerXCells);
    console.log("Felder von Spieler O", playerOCells);
    console.log("Alle verfügbaren Felder", availableCells);
}

/**
 * Lässt den Spieler X eine Zelle besetzten. 
 * Der doppelte Code soll zu einem späteren Zeitpunkt noch ausgelagert werden.
 * @param {number} cell 
 */
function setPlayerX(cell) {
    if (playerXTurn == false){
        console.log("Player O ist am Zug");
    } else if (!availableCells.includes(cell)) {
        console.log("Die Zelle ist nicht frei, hier sind alle möglichen Felder: ", availableCells)
    } else {
        playerXCells.push(cell);
        alreadySetCells.push(cell);
        availableCells.splice(cell, 1);
        playerXTurn = false; 
    }
}
/**
 * Lässt den Spieler O eine Zelle besetzten (soll mit setPlayerX zusammen gelgt werden ist aber jetzt grade so noch übersichtlicher)
 * @param {number} cell 
 */
function setPlayerO(cell) {
    if (playerXTurn == true) {
        console.log('Spieler X ist am Zug')
    } else if (!availableCells.includes(cell)) {
        console.log("Die Zelle ist nicht frei, hier sind alle möglichen Felder: ", availableCells)
    } else { 
        playerOCells.push(cell);
        alreadySetCells.push(cell); 
        availableCells.splice(cell, 1);
        playerXTurn = true;
    }
}
