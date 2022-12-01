import * as fs from 'fs';

export function inputToObject() {
  const inputFile = fs.readFileSync('input.txt', { encoding: 'utf8' });
  const input = inputFile.toString().trim().split('\n');
  return input;
}

export function inputToString() {
  const inputFile = fs.readFileSync('input.txt', { encoding: 'utf8' });
  const input = inputFile.toString().replace(/\n/g, ' ').replace(/  /g, ' ');
  return input;
}
