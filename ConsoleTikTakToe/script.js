const PLAYER_X_CLASS = 'X';
const PLAYER_O_CLASS = 'O';
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
let currentPlayer = playerXTurn ? PLAYER_O_CLASS : PLAYER_X_CLASS;



let topLeft = true;
let topMid = false;
let topRight = false;
let midLeft = false;
let midMid = false;
let midRight = false;
let bottomLeft = false;
let bottomMid = false;
let bottomRight = false;


startGame();
/**
 * Nur ein Ansatz das Feld in der Konsoe auszugeben
 */

function printPattern() {
    //console.log(adaptPattern(0, 0));
    //console.log(adaptPattern(0, 1));
    console.log(' ' + adaptPattern(0, 1) + ' | ' + adaptPattern(0, 2) + ' | ' + adaptPattern(0,3) + ' ');
    console.log('___|___|___')
    console.log(' ' + adaptPattern(1, 1) + ' | ' + adaptPattern(1, 2) + ' | ' + adaptPattern(1,3) + ' ');
    console.log('___|___|___')
    console.log(' ' + adaptPattern(2, 1) + ' | ' + adaptPattern(2, 2) + ' | ' + adaptPattern(2,3) + ' ');
    console.log('   |   |   ')
}
/**
 * Soll hinterher das printPattern() an die Aktuelle situation anpassen
 */
function adaptPattern(x, y) {
    // gucken, welches Symbol bei x y ausgegeben werden muss
    if (y === 2 && x === 1) {
        return 'X'
    }
    return 'O';
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
    availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
    } else {
        setCell(cell);
        playerXCells.push(cell);
    //    checkWin();
    }
}
/**
 * Lässt den Spieler O eine Zelle besetzten (soll mit setPlayerX zusammen gelgt werden ist aber jetzt grade so noch übersichtlicher)
 * @param {number} cell 
 */
function setPlayerO(cell) {
    if (playerXTurn == true) {
        console.log('Spieler X ist am Zug')
    } else { 
        setCell(cell);
        playerOCells.push(cell);
       // checkWin(currentPlayer);
    }
}

function setCell(cell){
    if(!cell == Number || 0 > cell > 9) {
        console.log("Ein Feld mit einer Zahl zwischen 0 und 8 auswählen")
    } else if (!availableCells.includes(cell)) {
        console.log("Die Zelle ist nicht frei, hier sind alle möglichen Felder: ", availableCells)
    } else {
        alreadySetCells.push(cell); 
        for(let index = 0; index < availableCells.length; index++){
            if(availableCells[index] === cell){
                availableCells.splice(index, 1);
            }
        }
        playerXTurn = !playerXTurn;
    }
} 
/*
function checkWin(currentPlayer) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellplayer[index].contatins(currentPlayer));
        }
    }

*/