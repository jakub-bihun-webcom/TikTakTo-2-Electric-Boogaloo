import * as fs from 'fs';

const inputFile = fs.readFileSync('input-joshua.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));

console.log('Star 1 ' + getFattestElf(input));
console.log('Star 2 ' + getThreeFattestElves(input));

//Aufgabe 1
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

//Aufgabe 2
function getThreeFattestElves(input) {
  let theFattestOfThemAllCalledStefan = 0;
  let theFastEaterCalledNiklas = 0;
  let theOneWhoNeverFinishesHisFoodCalledJoshy = 0;
  let aRandomElfWhoseCaloriesAreBeingCounted = 0;

  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      aRandomElfWhoseCaloriesAreBeingCounted = 0;
    } else {
      aRandomElfWhoseCaloriesAreBeingCounted = aRandomElfWhoseCaloriesAreBeingCounted + input[i];

      if (aRandomElfWhoseCaloriesAreBeingCounted >= theFattestOfThemAllCalledStefan) {
        theFastEaterCalledNiklas = theFattestOfThemAllCalledStefan;
        theOneWhoNeverFinishesHisFoodCalledJoshy = theFastEaterCalledNiklas;
        theFattestOfThemAllCalledStefan = aRandomElfWhoseCaloriesAreBeingCounted;
      } else if (aRandomElfWhoseCaloriesAreBeingCounted >= theFastEaterCalledNiklas) {
        theOneWhoNeverFinishesHisFoodCalledJoshy = theFastEaterCalledNiklas;
        theFastEaterCalledNiklas = aRandomElfWhoseCaloriesAreBeingCounted;
      } else if (aRandomElfWhoseCaloriesAreBeingCounted >= theOneWhoNeverFinishesHisFoodCalledJoshy) {
        theOneWhoNeverFinishesHisFoodCalledJoshy = aRandomElfWhoseCaloriesAreBeingCounted;
      }
    }
  }
  return theOneWhoNeverFinishesHisFoodCalledJoshy + theFastEaterCalledNiklas + theFattestOfThemAllCalledStefan;
}
