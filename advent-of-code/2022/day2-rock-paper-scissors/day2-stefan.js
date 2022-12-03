import { inputFileReader } from '../input-file-reader.js';

const inputLines = inputFileReader.readAsStringArray('input-stefan.txt');
const movePairs = inputLines.map(line => ({ enemyMove: line.charAt(0), myMove: line.charAt(2) }));
let score = 0;

movePairs.forEach(movePair => {
  const result = computeResult(movePair.enemyMove, movePair.myMove);
  score += result;
});

console.log(score);

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
  if (enemyMove === 'A' && myMove === 'X') {
    result += 3;
  }
  if (enemyMove === 'A' && myMove === 'Y') {
    result += 6;
  }
  if (enemyMove === 'A' && myMove === 'Z') {
    result += 0;
  }

  // Enemy chooses paper
  if (enemyMove === 'B' && myMove === 'X') {
    result += 0;
  }
  if (enemyMove === 'B' && myMove === 'Y') {
    result += 3;
  }
  if (enemyMove === 'B' && myMove === 'Z') {
    result += 6;
  }

  // Enemy chooses scissors
  if (enemyMove === 'C' && myMove === 'X') {
    result += 6;
  }
  if (enemyMove === 'C' && myMove === 'Y') {
    result += 0;
  }
  if (enemyMove === 'C' && myMove === 'Z') {
    result += 3;
  }

  return result;
}
