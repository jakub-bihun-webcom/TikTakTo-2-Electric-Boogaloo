import { inputFileReader } from '../input-file-reader.js';

const inputLines = inputFileReader.readAsStringArray('input-niklas.txt');
const movePairs = inputLines.map(line => ({ enemyMove: line.charAt(0), myMove: line.charAt(2) }));

let score = 0;

function scores() {
  score = 0;
  pointsForChoice();
  rockPaperScissors();
  console.log(score);
}

function pointsForChoice() {
  const rock = 'X';
  const paper = 'Y';
  const scissor = 'Z';
  const amountRock = movePairs.filter(obj => obj.myMove === rock).length;
  const amountPaper = movePairs.filter(obj => obj.myMove === paper).length;
  const amountScissor = movePairs.filter(obj => obj.myMove === scissor).length;
  score = amountRock + 2 * amountPaper + 3 * amountScissor;
}

function rockPaperScissors() {
  // Rock :        A || X
  // Paper:        B || Y
  // Scissors:     C || Z
  for (let i = 0; i < movePairs.length; i++) {
    const current = movePairs[i];
    if (current.enemyMove === 'A') {
      if (current.myMove === 'X') {
        score += 3;
      }
      if (current.myMove === 'Y') {
        score += 6;
      } else score += 0;
    }
    if (current.enemyMove === 'B') {
      if (current.myMove === 'Y') {
        score += 3;
      }
      if (current.myMove === 'Z') {
        score += 6;
      } else score += 0;
    }
    if (current.enemyMove === 'C') {
      if (current.myMove === 'Z') {
        score += 3;
      }
      if (current.myMove === 'X') {
        score += 6;
      } else score += 0;
    }
  }
}

function calculatedResult() {
  score = 0;
  // Rock :        A  + 1 ||  X:   lose
  // Paper:        B  + 2 ||  Y:   draw
  // Scissors:     C  + 3 ||  Z:   win
  for (let i = 0; i < movePairs.length; i++) {
    const current = movePairs[i];

    if (current.enemyMove === 'A' && current.myMove === 'X') {
      score += 3;
    }
    if (current.enemyMove === 'A' && current.myMove === 'Y') {
      score += 4;
    }
    if (current.enemyMove === 'A' && current.myMove === 'Z') {
      score += 8;
    }

    if (current.enemyMove === 'B' && current.myMove === 'X') {
      score += 1;
    }
    if (current.enemyMove === 'B' && current.myMove === 'Y') {
      score += 5;
    }
    if (current.enemyMove === 'B' && current.myMove === 'Z') {
      score += 9;
    }

    if (current.enemyMove === 'C' && current.myMove === 'X') {
      score += 2;
    }
    if (current.enemyMove === 'C' && current.myMove === 'Y') {
      score += 6;
    }
    if (current.enemyMove === 'C' && current.myMove === 'Z') {
      score += 7;
    }
  }
  console.log(score);
}

scores();
calculatedResult();
