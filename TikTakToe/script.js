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
let messageTextO;
let messageTextX;
let messageO;
let messageX;

const cellElements = document.querySelectorAll('[data-cell]');          //
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
let isPlayer_O_Turn = false;
let counter = 0;
let wonGamesX = 0;
let wonGamesO = 0;
messageTextO = document.getElementById('wonGamesOMsg')
console.log(messageTextO);
messageTextX = document.getElementById('wonGamesXMsg')
console.log(messageTextX);



startGame ();

restartButton.addEventListener('click', startGame);

function startGame (){ // Löschen aller Eingaben von vorherigen Spielen 
    isPlayer_O_Turn = false;        // Player X Beginnt
    cellElements.forEach(cell => {
        cell.classList.remove(PLAYER_X_CLASS);
        cell.classList.remove(PLAYER_O_CLASS);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, {once: true});  //Once => Jedes Feld kann nur einmal angeklickt werden
        counter = 0
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
        swapTurns();                    // Wenn kein Gewinner feststeht und es kein Unentschieden ist, 
        setBoardHoverClass();
    }
    counter++;
    console.log(counter);
}

function endGame (draw){        // If Schleife ob Unentschieden oder der Spieler welcher dran ist gewonnen hat. Anzeigen wie es ausgegangen ist
    if (counter < 6){
        winningMessageTextElement.innerText = `Well that was easy. ${isPlayer_O_Turn ? "O" : "X"} hat gewonnen`; 
    } else if (draw){
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
    console.log('won games O ' + wonGamesO)
    messageO = 'Spieler O : ' + (wonGamesO);
    console.log('won game X ' + wonGamesX)
    messageX = 'Spieler X : ' + (wonGamesX);
    messageTextO.innerText = messageO;
    messageTextX.innerText = messageX;
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

function setBoardHoverClass(){                      // Funktion für die floating Zeichen
    boardElement.classList.remove(PLAYER_X_CLASS);
    boardElement.classList.remove(PLAYER_O_CLASS);
    if (isPlayer_O_Turn){
        boardElement.classList.add(PLAYER_O_CLASS);
    } else {
        boardElement.classList.add(PLAYER_X_CLASS);
    }
}

function checkWin(currentClass){                // Nach jeder TicTacToe Eingabe wird geprüft ob einer der Gewinnkombinationen erreicht wurde
    return winning_combinations.some(combination =>{
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}
