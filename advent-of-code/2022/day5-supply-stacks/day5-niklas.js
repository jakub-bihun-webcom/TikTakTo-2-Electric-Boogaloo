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

function getAllNumbers() {
  inputLines.forEach(numbers => {
    const replaced = numbers.replace(/\D/g, '');
    const line = numbersInArray(replaced);
    createOrder(line);
  });
  printOutput();
}

function createOrder(line) {
  const amount = line[0];
  const startRow = line[1];
  const finRow = line[2];

  const start = crateOrder[startRow - 1];
  const finnish = crateOrder[finRow - 1];
  moveCrate2(amount, start, finnish, startRow, finRow);
  // moveCrate(amount, start, finnish, startRow, finRow);
}

function moveCrate(amount, start, finnish, startRow, finRow) {
  for (let i = 0; i < amount; i++) {
    finnish.push(start.pop());
  }
  crateOrder[startRow - 1] = start;
  crateOrder[finRow - 1] = finnish;
}

function moveCrate2(amount, start, finnish, startRow, finRow) {
  let temp = [];
  temp = start.slice(start.length - amount);
  for (let i = 0; i < amount; i++) {
    start.pop()
  }
  console.log("start " + start)
  console.log("finnish: " + finnish)
  const finnish2 = finnish.concat(temp);
  crateOrder[startRow - 1] = start;
  crateOrder[finRow - 1] = finnish2;
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

function printOutput() {
  console.log('Row1: ' + crateOrder[0]);
  console.log('Row2: ' + crateOrder[1]);
  console.log('Row3: ' + crateOrder[2]);
  console.log('Row4: ' + crateOrder[3]);
  console.log('Row5: ' + crateOrder[4]);
  console.log('Row6: ' + crateOrder[5]);
  console.log('Row7: ' + crateOrder[6]);
  console.log('Row8: ' + crateOrder[7]);
  console.log('Row9: ' + crateOrder[8]);
}
getAllNumbers();
