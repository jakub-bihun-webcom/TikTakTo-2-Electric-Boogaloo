import { inputFileReader } from '../input-file-reader.js';

const inputLines = inputFileReader.readAsStringArray('input-niklas.txt');
let counter = 0;
let counter2 = 0;

function includesSameArea() {
  inputLines.forEach(area => {
    compareRange(area);
  });
}

function compareRange(area) {
  const range = area.split(',');
  everyNumberInRange(range);
}

function everyNumberInRange(range) {
  const zahl1Range = range[0].split('-');
  const zahl2Range = range[1].split('-');

  const zahl1ToNumber = [parseInt(zahl1Range[0]), parseInt(zahl1Range[1])];
  const zahl2ToNumber = [parseInt(zahl2Range[0]), parseInt(zahl2Range[1])];

  const zahl1Anfang = zahl1ToNumber[0];
  const zahl1Ende = zahl1ToNumber[1];
  const zahl2Anfang = zahl2ToNumber[0];
  const zahl2Ende = zahl2ToNumber[1];

  completeOverlap(zahl1Anfang, zahl1Ende, zahl2Anfang, zahl2Ende);
  partialOverlap(zahl1Anfang, zahl1Ende, zahl2Anfang, zahl2Ende);
}

function completeOverlap(zahl1Anfang, zahl1Ende, zahl2Anfang, zahl2Ende) {
  if (zahl1Anfang >= zahl2Anfang && zahl1Ende <= zahl2Ende) {
    counter += 1;
  } else if (zahl2Anfang >= zahl1Anfang && zahl2Ende <= zahl1Ende) {
    counter += 1;
  }
}

function partialOverlap(zahl1Anfang, zahl1Ende, zahl2Anfang, zahl2Ende) {
  if (zahl1Anfang >= zahl2Anfang && zahl1Anfang <= zahl2Ende) {
    counter2 += 1;
  } else if (zahl1Ende >= zahl2Anfang && zahl1Ende <= zahl2Ende) {
    counter2 += 1;
  } else if (zahl2Anfang >= zahl1Anfang && zahl2Anfang <= zahl1Ende) {
    counter2 += 1;
  } else if (zahl2Ende >= zahl1Anfang && zahl2Ende <= zahl1Ende) {
    counter2 += 1;
  }
}

includesSameArea();
console.log('Aufgabe 1: ' + counter);
console.log('Aufgabe 2: ' + counter2);
