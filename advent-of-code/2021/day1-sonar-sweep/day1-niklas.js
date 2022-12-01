import * as fs from 'fs';

const inputFile = fs.readFileSync('input-niklas.txt', { encoding: 'utf8' });
const input = inputFile
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num, 10));
const solution = solve(input);

function solve(number) {
  let firstnumber;
  let counter = 0;

  number.forEach(number => {
    if (firstnumber !== undefined && number > firstnumber) {
      counter += 1;
    }
    firstnumber = number;
  });
  return counter;
}
