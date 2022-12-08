import { inputFileReader } from '../input-file-reader.js';
import { intersectionMethod } from '../intersection-method.js'

const lowercaseAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const uppercaseAlphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const inputLines = inputFileReader.readAsStringArray('input-stefan.txt');

// Part One
let prioritySum = 0;

inputLines.forEach(line => {
  const lineLength = line.length;
  const firstCompartment = line.slice(0, lineLength / 2);
  const secondCompartment = line.slice(lineLength / 2, lineLength);
  const firstCompartmentSet = new Set([...firstCompartment]);
  const secondCompartmentSet = new Set([...secondCompartment]);
  const intersection = intersectionMethod.createNewIntersection(firstCompartmentSet, secondCompartmentSet)
  const [commonItem] = intersection;
  const priority = getPriority(commonItem);
  prioritySum += priority;
});

console.log('Part One: ' + prioritySum);

// Part Two
const groups = [];
let currentGroup = [];

inputLines.forEach(line => {
  currentGroup.push(line);
  if (currentGroup.length === 3) {
    groups.push(currentGroup);
    currentGroup = [];
  }
});

let badgePrioritySum = 0;

groups.forEach(group => {
  const elf1 = new Set(group[0].split(''));
  const elf2 = new Set(group[1].split(''));
  const elf3 = new Set(group[2].split(''));
  const intersection = [elf1, elf2, elf3].reduce((a, b) => intersectionMethod.createNewIntersection(a, b));
  const [commonItem] = intersection;
  const priority = getPriority(commonItem);
  badgePrioritySum += priority;
});

console.log('Part Two: ' + badgePrioritySum);

/**
 * @param {string} item
 * @return {number}
 */
function getPriority(item) {
  if (item === item.toLowerCase()) {
    return lowercaseAlphabet.findIndex(letter => letter === item) + 1;
  }
  return uppercaseAlphabet.findIndex(letter => letter === item) + 27;
}
