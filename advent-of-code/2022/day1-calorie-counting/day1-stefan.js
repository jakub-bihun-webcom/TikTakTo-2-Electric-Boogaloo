import { inputFileReader } from '../input-file-reader.js';

const inputLines = inputFileReader.readAsStringArray('input-stefan.txt');

const calorieSums = [];
let calorieSum = 0;

inputLines.forEach(line => {
  if (line === '') {
    if (calorieSum > 0) {
      calorieSums.push(calorieSum);
    }
    calorieSum = 0;
  } else {
    calorieSum += parseInt(line, 10);
  }
});

// Part One
const maxCalories = Math.max(...calorieSums);
console.log('Fattest elf: ' + maxCalories);

// Part Two
const sumOfThreeFattestElves = calorieSums
  .sort((a, b) => b - a) // sort descending (Arrays.sort() sorts alphabetically by default)
  .splice(0, 3) // get the first 3 elements
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum
console.log('Three fattest elves: ' + sumOfThreeFattestElves);
