import { inputFileReader } from '../input-file-reader.js';
const inputLines = inputFileReader.readAsStringArray('input-niklas.txt');

const crateOrder = [
  ['T', 'D', 'W', 'Z', 'V', 'P'],
  ['L', 'S', 'W', 'V', 'F', 'J', 'D'],
  ['Z', 'M', 'L', 'S', 'V', 'T', 'B', 'H'],
  ['R', 'S', 'J'],
  ['C', 'Z', 'B', 'G', 'F', 'M', 'L', 'W'],
  ['Q', 'W', 'V', 'H', 'Z', 'R', 'G', 'B'],
  ['V', 'J', 'P', 'C', 'B', 'D', 'N'],
  ['P', 'T', 'B', 'Q'],
  ['H', 'G', 'Z', 'R', 'C']
];

function getAllNumber() {
  inputLines.forEach(numbers => {
    const replaced = numbers.replace(/\D/g, '');
    const line = numbersInArray(replaced);
    moveCrate(line);
  });
}

function moveCrate(line) {
  const amount = line[0];
  const startRow = line[1];
  const finRow = line[2];
}

function numbersInArray(number) {
  if (number.length === 3) {
    return Array.from(String(number), Number);
  } else {
    const arr = [];
    arr.push(parseInt(number[0] + number[1]));
    arr.push(parseInt(number[2]));
    arr.push(parseInt(number[3]));
    return arr;
  }
}

getAllNumber();
