import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));

console.log(getFattestElf(input));

/**
 * @param {array} input
 * @returns {number} solution
 */
function getFattestElf(input) {
  let tempHighestCalories = 0;
  let highestCalories = 0;

  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      tempHighestCalories = 0;
    } else if (!isNaN(input[i])) {
      tempHighestCalories = tempHighestCalories + input[i];
    }

    if (tempHighestCalories >= highestCalories) {
      highestCalories = tempHighestCalories;
    }
  }

  return highestCalories;
}
