import * as fs from 'fs';

const inputFile = fs.readFileSync('input-niklas.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));
const solution = maxCalories(input);
const solution2 = topThreeCalories(input);

/**
 *
 * @param input
 * @returns {number}
 */
function maxCalories(input) {
  let currentHighest = 0;
  let currentCalories = 0;

  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      currentCalories = input[i] + currentCalories;
      if (currentCalories > currentHighest) {
        currentHighest = currentCalories;
      }
    } else if (isNaN(input[i])) {
      currentCalories = 0;
    }
  }
  return currentHighest;
}

function topThreeCalories(input) {
  let currentCalories = 0;
  let top1 = 0;
  let top2 = 0;
  let top3 = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      currentCalories = input[i] + currentCalories;
      if (currentCalories > top1) {
        top3 = top2;
        top2 = top1;
        top1 = currentCalories;
      } else if (currentCalories > top2) {
        top3 = top2;
        top2 = currentCalories;
      } else if (currentCalories > top3) {
        top3 = currentCalories;
      }
    } else if (isNaN(input[i])) {
      currentCalories = 0;
    }
  }
  return top1 + top2 + top3;
}
console.log(solution);
console.log(solution2);
