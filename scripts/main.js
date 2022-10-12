const ALLCELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let availableCells = [];
let playerXCells = [];
let playerOCells = [];
let playerXTurn;
let gameWon = false;
let allowMove = false;

/**
 * Startet das Spiel und führt die Funktionen resetBoard() aus.
 */
startGame();