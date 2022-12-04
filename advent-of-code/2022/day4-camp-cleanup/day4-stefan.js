import { inputFileReader } from '../input-file-reader.js';

const inputLines = inputFileReader.readAsStringArray('input-stefan.txt');

// Part One
let fullyContainedCount = 0;

// Part Two
let overlapCount = 0;

inputLines.forEach(line => {
  const elves = line.split(',');
  const elf1 = elves[0];
  const elf2 = elves[1];
  const sections1 = getSectionNumbers(elf1);
  const sections2 = getSectionNumbers(elf2);
  const intersection = new Set([...sections1].filter(item => sections2.has(item)));
  if (intersection.size === sections1.size || intersection.size === sections2.size) {
    fullyContainedCount++;
  }
  if (intersection.size > 0) {
    overlapCount++;
  }
});

/**
 * @param {string} elf
 * @returns {Set<number>}
 */
function getSectionNumbers(elf) {
  const sections = elf.split('-');
  const start = parseInt(sections[0], 10);
  const end = parseInt(sections[1], 10);
  const set = new Set();
  for (let i = start; i <= end; i++) {
    set.add(i);
  }
  return set;
}

console.log('Part One: ' + fullyContainedCount);
console.log('Part Two: ' + overlapCount);
