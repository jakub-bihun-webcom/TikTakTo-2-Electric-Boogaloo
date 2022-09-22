const PLAYER_X_CLASS = 'x';
const PLAYER_O_CLASS = 'circle';
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
let messageTextO;
let messageTextX;
let messageO;
let messageX;

let cellElements = document.querySelectorAll('[data-cell]');
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.getElementById('winningMessageText');
let isPlayer_O_Turn = false;
let turnCounter = 0;
let wonGamesX = 0;
let wonGamesO = 0;
messageTextO = document.getElementById('wonGamesOMsg');
messageTextX = document.getElementById('wonGamesXMsg');

startGame();


/**
 * Funktionen startet das Spiel und räumt das Spielbrett auf.
 */
function startGame() {
    resetBoard();
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}


/**
 * Spielfeld wird aufgeräumt und Spieler X fängt die Runde wieder an.
 */
function resetBoard() {
    isPlayer_O_Turn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(PLAYER_X_CLASS);
        cell.classList.remove(PLAYER_O_CLASS);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, { once: true });
        turnCounter = 0;
    })
}


/**
 * Bei einem Zug wird die Marke gesetzt und gecheckt ob ein Spieler gewonnen hat oder ob es ein Unentschieden gibt.
 * @param {*} e 
 */
function handleCellClick(e) {
    const cell = e.target;
    const currentPlayer = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;   // Checkt welcher Spieler an der Reihe ist | true = Player X false = Player Y   
    console.log(cell);
    placeMark(cell, currentPlayer);     //Funktion placeMark wird ausgeführt für den Spieler dessen Zug ist
    if (checkWin(currentPlayer)) {       //CheckWin wird mit aktuellem Spieler ausgeführt
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();                    // Wenn kein Gewinner feststeht und es kein Unentschieden ist, 
        setBoardHoverClass();
    }
    turnCounter++;
    console.log(cellElements)
    console.log('baord Element', boardElement.classList)
    console.log(cellElements.item)
    if (isPlayer_O_Turn){
        KiMove();
    }
}

/**
 * Spiel wird Beendet. Zeigt die winningMessage mit dazugehöriger nachricht wer gewonnen hat oder ob ein Unentschieden vorliegt. 
 * @param {*} draw 
 */
function endGame(draw) {
    if (turnCounter < 6) {
        winningMessageTextElement.innerText = `Well that was easy. ${isPlayer_O_Turn ? "O" : "X"} hat gewonnen`;
    } else if (draw) {
        winningMessageTextElement.innerText = 'Unentschieden';
    } else {
        winningMessageTextElement.innerText = `Spieler mit ${isPlayer_O_Turn ? "O" : "X"} hat gewonnen`;
    }
    if (isPlayer_O_Turn == true) {
        ++wonGamesO
    }
    else {
        ++wonGamesX
    }
    messageO = 'Spieler O : ' + (wonGamesO);
    messageX = 'Spieler X : ' + (wonGamesX);
    messageTextO.innerText = messageO;
    messageTextX.innerText = messageX;
    winningMessageElement.classList.add('show');
}



/**
 * Wird überprüft ob das Spiel unentschieden ausgeht.
 * @returns 
 */
function isDraw() { // 
    return [...cellElements].every(cell => {
        return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS);
    })
}


/**
 * Auf einer Zelle das Zeichen des aktiven Spielers einfügen
 * @param {*} cell 
 * @param {*} currentPlayerClass 
 */
function placeMark(cell, currentPlayerClass) {
    cell.classList.add(currentPlayerClass);
}


/**
 * isPlayer_0_Turn boolean switchen nach jedem Zug
 */
function swapTurns() {
    isPlayer_O_Turn = !isPlayer_O_Turn;
}


/**
 * Funktion für die floating Symbole
 */
function setBoardHoverClass() {
    boardElement.classList.remove(PLAYER_X_CLASS);
    boardElement.classList.remove(PLAYER_O_CLASS);
    if (isPlayer_O_Turn) {
        boardElement.classList.add(PLAYER_O_CLASS);
    } else {
        boardElement.classList.add(PLAYER_X_CLASS);
    }
}


/**
 * Nach jeder Eingabe wird geprüft ob einer der Gewinnkombinationen erreicht wurde
 * @param {*} currentPlayer 
 * @returns 
 */
function checkWin(currentPlayer) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        })
    })
}

function KiMove(currentPlayerClass) {
    const random = Math.floor(Math.random() * cellElements.length);
    console.log(cellElements[random]);
    cellElements[random]
    cellElements[random].classList.add(currentPlayerClass);
    console.log(cellElements)
    const currentPlayer = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;   // Checkt welcher Spieler an der Reihe ist | true = Player X false = Player Y   
    placeMark(cellElements[random], currentPlayer); 
    console.log('joshys console',cellElements[random])
        //Funktion placeMark wird ausgeführt für den Spieler dessen Zug ist
    if (checkWin(currentPlayer)) {       //CheckWin wird mit aktuellem Spieler ausgeführt
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();                    // Wenn kein Gewinner feststeht und es kein Unentschieden ist, 
        setBoardHoverClass();
    }
    turnCounter++;
    console.log(cellElements)
}
