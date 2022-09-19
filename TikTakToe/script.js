const PLAYER_X_CLASS ='x';
const PLAYER_O_CLASS ='circle';
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

const cellElements = document.querySelectorAll('[data-cell]');          //
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
let isPlayer_O_Turn = false;

startGame ();

restartButton.addEventListener('click', startGame);

function startGame (){ // Löschen aller Eingaben von vorherigen Spielen 
    isPlayer_O_Turn = false;        // Player X Beginnt
    cellElements.forEach(cell => {
        cell.classList.remove(PLAYER_X_CLASS);
        cell.classList.remove(PLAYER_O_CLASS);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, {once: true});  //Once => Jedes Feld kann nur einmal angeklickt werden
    })
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');

}

function handleCellClick(e) { 
    const cell = e.target;
    const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;   // Checkt welcher Spieler an der Reihe ist | true = Player X false = Player Y   
    placeMark (cell, currentClass);     //Funktion placeMark wird ausgeführt für den Spieler dessen Zug ist
    if (checkWin(currentClass)) {       //CheckWin wird mit aktuellem Spieler ausgeführt
        endGame (false);
    } else if (isDraw()){               
        endGame (true);
    } else {
        swapTurns();                    // Wenn kein Gewinner feststeht und es kein Unentschieden ist werden di
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
        return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS);
    })
}

function placeMark(cell, currentClass){ // auf einer Zelle ein Zeichen des aktiven Spielers einfügen
    cell.classList.add(currentClass);
}
    
function swapTurns(){ // isPlayer_0_Turn boolean switchen
    isPlayer_O_Turn = !isPlayer_O_Turn;
}

function setBoardHoverClass(){
    boardElement.classList.remove(PLAYER_X_CLASS);
    boardElement.classList.remove(PLAYER_O_CLASS);
    if (isPlayer_O_Turn){
        boardElement.classList.add(PLAYER_O_CLASS);
    } else {
        boardElement.classList.add(PLAYER_X_CLASS);
    }
}

function checkWin(currentClass){
    return winning_combinations.some(combination =>{
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}