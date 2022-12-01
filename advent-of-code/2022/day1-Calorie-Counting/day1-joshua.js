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
  let theFattestOfTheAllCalledStefan = 0;
  let theFastEaterCalledNiklas = 0;
  let theOneWhoNeverFinishesHisFoodCalledJoshy = 0;
  let aRandomElvWhoseCaloriesAreBeingCounted = 0;

  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      aRandomElvWhoseCaloriesAreBeingCounted = 0;
    } else {
      aRandomElvWhoseCaloriesAreBeingCounted = aRandomElvWhoseCaloriesAreBeingCounted + input[i];

      if (aRandomElvWhoseCaloriesAreBeingCounted >= theFattestOfTheAllCalledStefan) {
        theFastEaterCalledNiklas = theFattestOfTheAllCalledStefan;
        theOneWhoNeverFinishesHisFoodCalledJoshy = theFastEaterCalledNiklas;
        theFattestOfTheAllCalledStefan = aRandomElvWhoseCaloriesAreBeingCounted;
      } else if (aRandomElvWhoseCaloriesAreBeingCounted >= theFastEaterCalledNiklas) {
        theOneWhoNeverFinishesHisFoodCalledJoshy = theFastEaterCalledNiklas;
        theFastEaterCalledNiklas = aRandomElvWhoseCaloriesAreBeingCounted;
      } else if (aRandomElvWhoseCaloriesAreBeingCounted >= theOneWhoNeverFinishesHisFoodCalledJoshy) {
        theOneWhoNeverFinishesHisFoodCalledJoshy = aRandomElvWhoseCaloriesAreBeingCounted;
      }
    }
  }
  return theOneWhoNeverFinishesHisFoodCalledJoshy + theFastEaterCalledNiklas + theFattestOfTheAllCalledStefan;
}
