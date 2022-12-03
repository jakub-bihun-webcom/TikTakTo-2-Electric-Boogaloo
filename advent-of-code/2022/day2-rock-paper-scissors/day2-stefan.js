import { inputFileReader } from '../input-file-reader.js';

const inputLines = inputFileReader.readAsStringArray('input-stefan.txt');
const movePairs = inputLines.map(line => ({ enemyMove: line.charAt(0), myMove: line.charAt(2) }));

const enemyRock = 'A';
const enemyPaper = 'B';
const enemyScissors = 'C';
const myRock = 'X';
const myPaper = 'Y';
const myScissors = 'Z';

// Part One
let scorePartOne = 0;
movePairs.forEach(movePair => {
  const result = computeResult(movePair.enemyMove, movePair.myMove);
  scorePartOne += result;
});
console.log('Part One ' + scorePartOne);

// Part Two
let scorePartTwo = 0;
movePairs.forEach(movePair => {
  const myMove = determineShape(movePair.enemyMove, movePair.myMove);
  const result = computeResult(movePair.enemyMove, myMove);
  scorePartTwo += result;
});
console.log('Part Two ' + scorePartTwo);

/**
 * @param {string} enemyMove
 * @param {string} myMove
 * @return {number}
 */
function computeResult(enemyMove, myMove) {
  let result = 0;

  // A and X: Rock
  // B and Y: Paper
  // C and Z: Scissors
  if (myMove === 'X') {
    result += 1;
  }
  if (myMove === 'Y') {
    result += 2;
  }
  if (myMove === 'Z') {
    result += 3;
  }

  // Enemy chooses rock
  if (enemyMove === enemyRock && myMove === 'X') {
    result += 3;
  }
  if (enemyMove === enemyRock && myMove === 'Y') {
    result += 6;
  }
  if (enemyMove === enemyRock && myMove === 'Z') {
    result += 0;
  }

  // Enemy chooses paper
  if (enemyMove === enemyPaper && myMove === 'X') {
    result += 0;
  }
  if (enemyMove === enemyPaper && myMove === 'Y') {
    result += 3;
  }
  if (enemyMove === enemyPaper && myMove === 'Z') {
    result += 6;
  }

  // Enemy chooses scissors
  if (enemyMove === enemyScissors && myMove === 'X') {
    result += 6;
  }
  if (enemyMove === enemyScissors && myMove === 'Y') {
    result += 0;
  }
  if (enemyMove === enemyScissors && myMove === 'Z') {
    result += 3;
  }

  return result;
}

/**
 * @param {string} enemyMove
 * @param {string} desiredOutcome X means you need to lose, Y means you need to end the round in a draw, and Z means you
 * need to win.
 * @return string
 */
function determineShape(enemyMove, desiredOutcome) {
  // A and X: Rock
  // B and Y: Paper
  // C and Z: Scissors

  // Enemy chooses rock
  if (enemyMove === enemyRock && desiredOutcome === 'X') {
    return myScissors;
  }
  if (enemyMove === enemyRock && desiredOutcome === 'Y') {
    return myRock;
  }
  if (enemyMove === enemyRock && desiredOutcome === 'Z') {
    return myPaper;
  }

  // Enemy chooses paper
  if (enemyMove === enemyPaper && desiredOutcome === 'X') {
    return myRock;
  }
  if (enemyMove === enemyPaper && desiredOutcome === 'Y') {
    return myPaper;
  }
  if (enemyMove === enemyPaper && desiredOutcome === 'Z') {
    return myScissors;
  }

  // Enemy chooses scissors
  if (enemyMove === enemyScissors && desiredOutcome === 'X') {
    return myPaper;
  }
  if (enemyMove === enemyScissors && desiredOutcome === 'Y') {
    return myScissors;
  }
  if (enemyMove === enemyScissors && desiredOutcome === 'Z') {
    return myRock;
  }
}
