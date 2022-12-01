import * as fs from 'fs';

const inputFile = fs.readFileSync('input-joshua.txt', { encoding: 'utf8' });
const inputLines = inputFile.toString().trim().split('\n');

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

const maxCalories = Math.max(...calorieSums);

console.log(maxCalories);
