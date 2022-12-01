import * as fs from 'fs';

const inputFile = fs.readFileSync('input-joshua.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));
const solution = solve(input);
console.log(solution);

/**
 * @param {number[]} measurements
 * @return {number}
 */
function solve(measurements) {
  let previousMeasurement;
  let increaseCount = 0;

  measurements.forEach(measurement => {
    if (previousMeasurement !== undefined && measurement > previousMeasurement) {
      increaseCount++;
    }
    previousMeasurement = measurement;
  });

  return increaseCount;
}
