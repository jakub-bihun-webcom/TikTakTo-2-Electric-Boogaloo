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
 *  Funktion addiert die Kalorien jedes Elfen und gibt die Kalorienanzahl des Elfs zurück, welcher am meisten Kalorien
 *  dabei hat, damit alle anderen Elfen wissen, wo sie sich essen schnorren können.
 * @param {[number]} input
 * @returns {number} currentHighest
 */
function maxCalories(input) {
  let currentHighest = 0;
  let currentCalories = 0;

  input.forEach(item => {
    if (!isNaN(item)) {
      currentCalories = item + currentCalories;
      if (currentCalories > currentHighest) {
        currentHighest = currentCalories;
      }
    } else {
      currentCalories = 0;
    }
  });
  return currentHighest;
}

/**
 * Das Essen von einem Elfen war nicht genug, deshalb wird bei den Top 3 Elfen geschaut wie viel Essen die dabei haben.
 * @param {[number]} input
 * @returns {number}
 */
function topThreeCalories(input) {
  let currentCalories = 0;
  let top1 = 0;
  let top2 = 0;
  let top3 = 0;

  input.forEach(item => {
    if (isNaN(item)) {
      currentCalories = 0;
    } else {
      currentCalories = item + currentCalories;
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
    }
  });
  return top1 + top2 + top3;
}
