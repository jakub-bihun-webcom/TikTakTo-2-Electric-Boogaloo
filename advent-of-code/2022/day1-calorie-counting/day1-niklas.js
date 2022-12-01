import * as fs from 'fs';

const inputFile = fs.readFileSync('input-joshua.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));
const solution = maxCalories(input);

function maxCalories(input) {
  console.log(input.length);
  let currentHighest = 0;
  let currentCalories = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      currentCalories = input[i] + currentCalories;
    }

    if (isNaN(input[i])) {
      return;
    }
  }

  return currentHighest;
}

console.log(solution);
