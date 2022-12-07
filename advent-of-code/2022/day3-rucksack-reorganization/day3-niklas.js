import { inputFileReader } from '../input-file-reader.js';

const inputLines = inputFileReader.readAsStringArray('input-niklas.txt');
let score;

function duplicates() {
  score = 0;
  inputLines.forEach(rucksack => {
    split(rucksack);
  });
  console.log('Aufgabe 1: ' + score);
  groupBadge();
}

function split(rucksack) {
  const result = [rucksack.slice(0, rucksack.length / 2), rucksack.slice(rucksack.length / 2)];
  compareStrings(result);
}

function compareStrings(str) {
  const compartment1 = str[0].split('');
  const compartment2 = str[1].split('');
  for (const char of compartment1) {
    if (compartment2.includes(char)) {
      priorityCalculator(char);
      break;
    }
  }
}

function groupBadge() {
  score = 0;
  for (let i = 0; i < inputLines.length; i = i + 3) {
    const rucksack1 = inputLines[i];
    const rucksack2 = inputLines[i + 1];
    const rucksack3 = inputLines[i + 2];
    for (const char of rucksack1) {
      if (rucksack2.includes(char) && rucksack3.includes(char)) {
        priorityCalculator(char);
        break;
      }
    }
  }
  console.log('Aufgabe 2: ' + score);
}

duplicates();

function priorityCalculator(char) {
  if (char === 'a') {
    score += 1;
  }
  if (char === 'b') {
    score += 2;
  }
  if (char === 'c') {
    score += 3;
  }
  if (char === 'd') {
    score += 4;
  }
  if (char === 'e') {
    score += 5;
  }
  if (char === 'f') {
    score += 6;
  }
  if (char === 'g') {
    score += 7;
  }
  if (char === 'h') {
    score += 8;
  }
  if (char === 'i') {
    score += 9;
  }
  if (char === 'j') {
    score += 10;
  }
  if (char === 'k') {
    score += 11;
  }
  if (char === 'l') {
    score += 12;
  }
  if (char === 'm') {
    score += 13;
  }
  if (char === 'n') {
    score += 14;
  }
  if (char === 'o') {
    score += 15;
  }
  if (char === 'p') {
    score += 16;
  }
  if (char === 'q') {
    score += 17;
  }
  if (char === 'r') {
    score += 18;
  }
  if (char === 's') {
    score += 19;
  }
  if (char === 't') {
    score += 20;
  }
  if (char === 'u') {
    score += 21;
  }
  if (char === 'v') {
    score += 22;
  }
  if (char === 'w') {
    score += 23;
  }
  if (char === 'x') {
    score += 24;
  }
  if (char === 'y') {
    score += 25;
  }
  if (char === 'z') {
    score += 26;
  }
  if (char === 'A') {
    score += 27;
  }
  if (char === 'B') {
    score += 28;
  }
  if (char === 'C') {
    score += 29;
  }
  if (char === 'D') {
    score += 30;
  }
  if (char === 'E') {
    score += 31;
  }
  if (char === 'F') {
    score += 32;
  }
  if (char === 'G') {
    score += 33;
  }
  if (char === 'H') {
    score += 34;
  }
  if (char === 'I') {
    score += 35;
  }
  if (char === 'J') {
    score += 36;
  }
  if (char === 'K') {
    score += 37;
  }
  if (char === 'L') {
    score += 38;
  }
  if (char === 'M') {
    score += 39;
  }
  if (char === 'N') {
    score += 40;
  }
  if (char === 'O') {
    score += 41;
  }
  if (char === 'P') {
    score += 42;
  }
  if (char === 'Q') {
    score += 43;
  }
  if (char === 'R') {
    score += 44;
  }
  if (char === 'S') {
    score += 45;
  }
  if (char === 'T') {
    score += 46;
  }
  if (char === 'U') {
    score += 47;
  }
  if (char === 'V') {
    score += 48;
  }
  if (char === 'W') {
    score += 49;
  }
  if (char === 'X') {
    score += 50;
  }
  if (char === 'Y') {
    score += 51;
  }
  if (char === 'Z') {
    score += 52;
  }
}
