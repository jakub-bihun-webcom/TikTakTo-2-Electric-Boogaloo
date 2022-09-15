const player_x_class ='x';
const player_o_class ='circle';
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

startGame ();

restartButton.addEventListener('click', startGame);

function startGame (){ // Löschen aller Eingaben von vorherigen Spielen 
    isPlayer_O_Turn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(player_x_class);
        cell.classList.remove(player_o_class);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, {once: true});
    })
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');

}

function handleCellClick(e) { // Checken welcher Spieler dran ist 
    const cell = e.target;
    const currentClass = isPlayer_O_Turn ? player_o_class : player_x_class;      // Aufrufen von placeMark, if Schleife um zu checken ob ein Spieler gewonnen hat / unentschieden gespielt wurde, ansonsten aufrufen von swapTurns()
    placeMark (cell, currentClass);
    if (checkWin(currentClass)) {
        endGame (false);
    } else if (isDraw()){
        endGame (true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame (draw){        // If Schleife ob Unentschieden oder der Spieler welcher dran ist gewonnen hat. Anzeigen wie es ausgegangen ist
    if (draw){
        winningMessageTextElement.innerText = 'Unentschieden';
    } else {
        winningMessageTextElement.innerText = `Spieler mit ${isPlayer_O_Turn ? "O" : "X"} hat gewonnen`;
    }
    winningMessageElement.classList.add('show');
}

function isDraw (){ // 
    return [...cellElements].every(cell =>{
        return cell.classList.contains(player_x_class) || cell.classList.contains(player_o_class);
    })
}

function placeMark(cell, currentClass){ // auf einer Zelle ein Zeichen des aktiven Spielers einfügen
    cell.classList.add(currentClass);
}
    
function swapTurns(){ // isPlayer_0_Turn boolean switchen
    isPlayer_O_Turn = !isPlayer_O_Turn;
}

function setBoardHoverClass(){
    boardElement.classList.remove(player_x_class);
    boardElement.classList.remove(player_o_class);
    if (isPlayer_O_Turn){
        boardElement.classList.add(player_o_class);
    } else {
        boardElement.classList.add(player_x_class);
    }
}

function checkWin(currentClass){
    return winning_combinations.some(combination =>{
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}