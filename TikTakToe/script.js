const player_x_class ='x'
const player_o_class ='circle'
const winning_combinations = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cellElements = document.querySelectorAll('[data-cell]');
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
let isPlayer_O_Turn = false;

startGame ()

function startGame (){ // Löschen aller Eingaben von vorherigen Spielen 

}

function handleCellClick(e) { // Checken welcher Spieler dran ist 
                                // Aufrufen von placeMark, if Schleife um zu checken ob ein Spieler gewonnen hat / unentschieden gespielt wurde, ansonsten aufrufen von swapTurns()
}

function endGame (){        // If Schleife ob Unentschieden oder der Spieler welcher dran ist gewonnen hat. Anzeigen wie es ausgegangen ist

}

function isDraw (){ // 

}

function placeMark(){ // auf einer Zelle ein Zeichen des aktiven Spielers einfügen

}
    
function swapTurns(){ // isPlayer_0_Turn boolean switchen
    isPlayer_O_Turn = !isPlayer_O_Turn;
}
