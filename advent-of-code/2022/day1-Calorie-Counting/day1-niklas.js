import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));
const solution = maxCalories(input);

/**
 *
 * @param input
 * @returns {number}
 */
function maxCalories(input) {
  console.log(input.length);
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

console.log(solution);
