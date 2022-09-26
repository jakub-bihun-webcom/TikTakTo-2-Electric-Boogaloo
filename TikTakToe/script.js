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
let alreadySetCells = [];

startGame();

/**
 * Funktionen startet das Spiel und räumt das Spielbrett auf.
 */
function startGame() {
    resetBoard();
    setBoardHoverClass();
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
    winningMessageElement.classList.remove('show');
    alreadySetCells = [];
}

/**
 * Bei einem Zug wird die Marke gesetzt und gecheckt ob ein Spieler gewonnen hat oder ob es ein Unentschieden gibt.
 * @param {*} e - html event 
 */
function handleCellClick(e) {
    const cell = e.target;
    const currentPlayer = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;   // Checkt welcher Spieler an der Reihe ist | true = Player X false = Player Y   
    if (alreadySetCells.includes(cell.id)) {
    } else {
        placeMark(cell, currentPlayer);     //Funktion placeMark wird ausgeführt für den Spieler dessen Zug ist
        if (checkWin(currentPlayer)) {       //CheckWin wird mit aktuellem Spieler ausgeführt
            setTimeout(() => endGame(false), 500);
        } else if (isDraw()) {
            setTimeout(() => { endGame(true); }, 500);
        } else {
            swapTurns();                    // Wenn kein Gewinner feststeht und es kein Unentschieden ist, 
            setBoardHoverClass();
        }
        turnCounter++;
        alreadySetCells.push(cell.id);
        if (isPlayer_O_Turn) {
            setTimeout(() => kiMove(), 200);
        }
    }
}

/**
 * Spiel wird Beendet. Zeigt die winningMessage mit dazugehöriger nachricht wer gewonnen hat oder ob ein Unentschieden vorliegt. 
 * @param {*} draw - Unentschieden - checkt ob das Spiel unetschieden ausgegangen ist
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
    messageO = 'KI : ' + (wonGamesO);
    messageX = 'Spieler : ' + (wonGamesX);
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
 * Die Zelle. in der die Markierung auf das Spielbrett gesetzt werden soll.
 * @param {*} cell - Eine Bestimmte Zelle 
 * @param {*} currentPlayerClass  - Zeigt welcher Spieler am Zug ist
 */
function placeMark(cell, currentPlayerClass) {
    cell.classList.add(currentPlayerClass);
}

/**
 * Nach jedem Zug wird der Spieler gewechselt.
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
 * @param {*} currentPlayer - Zeigt welcher Spieler am Zug ist 
 * @returns 
 */
function checkWin(currentPlayer) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        })
    })
}

/**
 * Die KI wählt eine zufällige Zahl zwischen 0 und 8, diese Zahl wird mit den bereits vergebenen Zellen abgeglichen, 
 * falls die Zelle schon vergeben ist wird eine neue zufällige Zahl ausgegeben, bis eine freie Zelle gefunden wurde.
 * In der freien Zelle macht die KI dann ihren Zug.  
 * @param {*} currentPlayerClass - Zeigt welcher Spieler am Zug ist  
 * @param {*} handleCellClick - Ermöglicht es der Ki ein Feld zu clicken
 */
function kiMove(currentPlayerClass, handleCellClick) {
    const random = Math.floor(Math.random() * cellElements.length);
    //console.log(cellElements[random]);
    if (alreadySetCells.includes(cellElements[random].id)) {
        kiMove()
    }
    else {
        cellElements[random].classList.add(currentPlayerClass);
        const currentPlayer = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;   // Checkt welcher Spieler an der Reihe ist | true = Player X false = Player Y   
        placeMark(cellElements[random], currentPlayer);
        cellElements.forEach(cell => cell.removeEventListener('change', handleCellClick));
        alreadySetCells.push(cellElements[random].id)
        if (checkWin(currentPlayer)) {
            setTimeout(() => { endGame(false) }, 500);
        } else if (isDraw()) {
            setTimeout(() => { endGame(true); }, 500);
        } else {
            swapTurns();                    // Wenn kein Gewinner feststeht und es kein Unentschieden ist, 
            setBoardHoverClass();
        }
        turnCounter++;
    }
}


