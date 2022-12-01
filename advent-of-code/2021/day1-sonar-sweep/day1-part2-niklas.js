import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));
const solution = solve(input);

/***
 *
 * @param number
 * @returns number
 */
export default function solve(number) {
  let counter = 0;
  for (let i = 0; i < number.length - 2; i++) {
    let threeMeasurment = number[i] + number[i + 1] + number[i + 2];
    let compare = number[i + 1] + number[i + 2] + number[i + 3];

    if (compare > threeMeasurment) {
      counter++;
    }
  }
  return counter;
}

console.log(solution);
