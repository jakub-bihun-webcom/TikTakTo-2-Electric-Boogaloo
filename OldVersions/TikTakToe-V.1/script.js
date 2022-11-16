const PLAYER_X_CLASS = "x";
const PLAYER_O_CLASS = "circle";
const boardElement = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.getElementById("winningMessageText");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const allCellIds = [
  "cell0",
  "cell1",
  "cell2",
  "cell3",
  "cell4",
  "cell5",
  "cell6",
  "cell7",
  "cell8",
];
let isPlayer_O_Turn = false;
let turnCounter = 0;
let wonGamesX = 0;
let wonGamesO = 0;
let messageTextO;
let messageTextX;
let messageO;
let messageX;
let cellElements = document.querySelectorAll("[data-cell]");
let alreadySetCells = [];

messageTextO = document.getElementById("wonGamesOMsg");
messageTextX = document.getElementById("wonGamesXMsg");

startGame();

/**
 * Funktionen startet das Spiel und räumt das Spielbrett auf.
 */
function startGame() {
  setBoard();
  setBoardHoverClass();
}

/**
 * Spielfeld wird aufgeräumt und Spieler X fängt die Runde wieder an.
 */
function resetBoard() {
  isPlayer_O_Turn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(PLAYER_X_CLASS);
    cell.classList.remove(PLAYER_O_CLASS);
    cell.removeEventListener("click", playerMove);
    cell.addEventListener("click", playerMove, { once: true });
    turnCounter = 0;
  });
  winningMessageElement.classList.remove("show");

  alreadySetCells = [];
}

/**
 * Bei einem Zug wird die Marke gesetzt und gecheckt ob ein Spieler gewonnen hat oder ob es ein Unentschieden gibt.
 * @param {Element} e - html event
 */
function playerMove(e) {
  const cell = e.target;
  if (!alreadySetCells.includes(cell.id)) {
    handleMove(cell);
    if (isPlayer_O_Turn) {
      kiMove();
    }
  }
}

/**
 * Spiel wird Beendet. Zeigt die winningMessage mit dazugehöriger nachricht wer gewonnen hat oder ob ein Unentschieden vorliegt.
 * @param {boolean} draw - Unentschieden - checkt ob das Spiel unetschieden ausgegangen ist
 */
function endGame(draw) {
  if (turnCounter < 6) {
    winningMessageTextElement.innerText = `Well that was easy. ${
      isPlayer_O_Turn ? "O" : "X"
    } hat gewonnen`;
  } else if (draw) {
    winningMessageTextElement.innerText = "Unentschieden";
  } else {
    winningMessageTextElement.innerText = `Spieler mit ${
      isPlayer_O_Turn ? "O" : "X"
    } hat gewonnen`;
  }
  if (draw == true) {
    //es werden keine Punkte verteilt wenn es Unentschieden ausgeht.
  } else if (isPlayer_O_Turn == true) {
    ++wonGamesO;
  } else {
    ++wonGamesX;
  }
  messageO = "KI : " + wonGamesO;
  messageX = "Spieler : " + wonGamesX;
  messageTextO.innerText = messageO;
  messageTextX.innerText = messageX;
  winningMessageElement.classList.add("show");
}

/**
 * Wird überprüft ob das Spiel unentschieden ausgeht.
 */
function isDraw() {
  //
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(PLAYER_X_CLASS) ||
      cell.classList.contains(PLAYER_O_CLASS)
    );
  });
}

/**
 * Die Zelle. in der die Markierung auf das Spielbrett gesetzt werden soll.
 * @param {Element} cell - Eine Bestimmte Zelle
 * @param {string} currentPlayerClass  - Zeigt welcher Spieler am Zug ist
 */
function placeMark(cell, currentPlayerClass) {
  cell.classList.add(currentPlayerClass);
  //alreadySetCells.add(currentPlayerClass);
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
 * @param {Element} currentPlayer - Zeigt welcher Spieler am Zug ist
 */
function checkWin(currentPlayer) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
}

/**
 * Die KI wählt eine zufällige Zahl zwischen 0 und 8, diese Zahl wird mit den bereits vergebenen Zellen abgeglichen,
 * falls die Zelle schon vergeben ist wird eine neue zufällige Zahl ausgegeben, bis eine freie Zelle gefunden wurde.
 * In der freien Zelle macht die KI dann ihren Zug.
 */
function kiMove(currentPlayerClass, playerMove) {
  let cellToPlaceMark = getCellToPlaceMark();
  cellToPlaceMark.classList.add(currentPlayerClass);
  handleMove(cellToPlaceMark);
}

/**
 * Die Marke wird für den aktiven Spieler gesetzt, anschließend werden die Funktionen zum überprüfen
 * von Gewinn/Unentschieden ausgeführt. Wenn es kein Unentschieden/Sieger gibt wird der aktive Spieler
 * gewechselt und der nächste Zug startet.
 * @param {Element} cell
 */
function handleMove(cell) {
  let currentPlayer = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;
  placeMark(cell, currentPlayer);
  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
  turnCounter++;
  alreadySetCells.push(cell.id);
}

/**
 * Liefert die Ids der Zellen zurück, auf denen noch keine Markierung gesetzt ist
 */
function getAvailableCellIds() {
  let availableCellIds = [];
  allCellIds.forEach((cell) => {
    if (!alreadySetCells.includes(cell)) {
      availableCellIds.push(cell);
    }
  });
  return availableCellIds;
}
/**
 * Wählt zufällig eine Zelle aus in die, die KI ihr Symbol setzten soll.
 * @returns
 */
function getCellToPlaceMark() {
  const availableCellIds = getAvailableCellIds();
  const randomIndexPick = Math.floor(Math.random() * availableCellIds.length);
  let selectedCellId = availableCellIds[randomIndexPick];
  // die Id der Zelle besteht aus einem 'sprechenden' Schlüssel wie bspw. 'cell4'.
  // Da jedoch der Index benötigt wird, lesen wir diesen nachfolgend über den Teilstring aus
  let selectedCellIndex = selectedCellId.substring("cell".length);
  let selectedCell = cellElements[selectedCellIndex];
  return selectedCell;
}
