const PLAYER_X_CLASS = 'X';
const PLAYER_O_CLASS = 'O';
const allCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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

startGame();

function adaptPattern(x, y) {
    // gucken, welches Symbol bei x y ausgegeben werden muss
    if (y === 2 && x === 2) {
        return 'X'
    }
    return 'O';
}

/**
 * Startet das Spiel und lässt das Spielfeld aufräumen.
 */
function startGame() {
    resetBoard();
}

/**
 * Setzt das Board zurück sodass alle Felder wieder leer sind. 
 */
function resetBoard() {
    playerOCells = [];
    playerXCells = [];
    availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    playerXTurn = true;

}

/**
 * Überprüft ob SpielerX am Zug ist, wenn das der Fall ist wird setCell(), mit der entsprechenden Zelle ausgeführt.
 * @param {number} cell 
 */
function setPlayerX(cell) {
    if (playerXTurn == false) {
        console.log("Player O ist am Zug");
    } else {
        setCell(cell);
        //  checkWin();
    }
}

/**
 * Überprüft ob SpielerO am Zug ist, wenn das der Fall ist wird setCell(), mit der entsprechenden Zelle ausgeführt.
 * @param {number} cell 
 */
function setPlayerO(cell) {
    if (playerXTurn == true) {
        console.log('Spieler X ist am Zug')
    } else {
        setCell(cell);
        //    checkWin();
    }
}

/**
 * Funktion die überprüft ob die Eingabe korrekt ist und das eingegebene Feld noch verfügbar ist.
 * Wenn das Feld frei ist, wird die dazugehörige Zahl aus dem Array availableCells gestrichen und dem Array des jeweiligen Spielers hinzugefügt.
 * @param {number} cell 
 */
function setCell(cell) {
    if (!cell == Number || 0 > cell > 9) {
        console.log("Ein Feld mit einer Zahl zwischen 0 und 8 auswählen")
    } else if (!availableCells.includes(cell)) {
        console.log("Die Zelle ist nicht frei, hier sind alle möglichen Felder: ", availableCells)
    } else {
        alreadySetCells.push(cell);
        for (let index = 0; index < availableCells.length; index++) {
            if (availableCells[index] === cell) {
                availableCells.splice(index, 1);
            }
        }
        if (playerXTurn == true) {
            playerXCells.push(cell);
        } else {
            playerOCells.push(cell);
        }
        playerXTurn = !playerXTurn;
    }
}

/**
 * Funktion um die belegten Zellen von beiden Spielern und alle noch freien Felder auslesen zu lassen.
 */
function stateOfBoard() {
    console.log("Felder von Spieler X: ", playerXCells);
    console.log("Felder von Spieler O: ", playerOCells);
    console.log("Alle verfügbaren Felder: ", availableCells);
}

/**
 * Funktion, welche das Array eines Spielers überprüft ob es eine mögliche Gewinnkombination enthält
 * @returns 
 */
function checkWin() {
    return WINNING_COMBINATIONS.some(item => {
        return item.every(index => {
            return playerXCells.contains(WINNING_COMBINATIONS);
        })
    })
}








/*
class Fields {
    constructor(_field) {
        this.fieldNumber = _field;
    }
}

let field0 = new Fields(0);
let field1 = new Fields(1);
let field2 = new Fields(2);
let field3 = new Fields(3);
let field4 = new Fields(4);
let field5 = new Fields(5);
let field6 = new Fields(6);
let field7 = new Fields(7);
let field8 = new Fields(8);

console.log("Feld0", field0.fieldNumber, typeof (field0.fieldNumber))

let topLeft = true;
let topMid = false;
let topRight = false;
let midLeft = false;
let midMid = false;
let midRight = false;
let bottomLeft = false;
let bottomMid = false;
let bottomRight = false;

/**
 * Nur ein Ansatz das Feld in der Konsoe auszugeben
 */

/*
function printPattern() {
    //console.log(adaptPattern(0, 0));
    //console.log(adaptPattern(0, 1));
    for (let index = 0; index < allCells.length; index++) {
        //   const element = allCells[index];
        if (playerXCells.includes[index]) {
            field[index].fieldNumber[index] = "X";
        } else if (playerOCells.includes[index]) {
            field[index].fieldNumber[index] = "O";
        } else {
            field[index].fieldNumber[index] = "  ";
        }
    }


    console.log(' ' + field0.fieldNumber + ' | ' + adaptPattern(0, 2) + ' | ' + adaptPattern(0, 3) + ' ');
    console.log('___|___|___')
    console.log(' ' + adaptPattern(1, 1) + ' | ' + adaptPattern(1, 2) + ' | ' + adaptPattern(1, 3) + ' ');
    console.log('___|___|___')
    console.log(' ' + adaptPattern(2, 1) + ' | ' + adaptPattern(2, 2) + ' | ' + adaptPattern(2, 3) + ' ');
    console.log('   |   |   ')
}
*/
