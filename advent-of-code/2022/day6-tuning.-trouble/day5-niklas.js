import { inputFileReader } from '../input-file-reader.js';
const inputLines = inputFileReader.readAsStringArray('input-niklas.txt');
const signal = inputLines[0];

function uniqueSequence() {
  for (let i = 3; i < signal.length; i++) {
    if (
      signal[i] !== signal[i - 1] &&
      signal[i] !== signal[i - 2] &&
      signal[i] !== signal[i - 3] &&
      signal[i - 1] !== signal[i - 2] &&
      signal[i - 1] !== signal[i - 3] &&
      signal[i - 2] !== signal[i - 3]
    ) {
      console.log('Aufgabe 1: ' + i);
    }
  }
}

function uniqueMessage() {
    for (let i = 13; i < signal.length - 1; i++) {
        let arrayOfMessage = []
        for (let j = 0; j < 14; j++) {
            arrayOfMessage.push(signal[i - j])
        }
        const duplicates = arrayOfMessage => arrayOfMessage.filter((item, index) => arrayOfMessage.indexOf(item) !==index)
        const tofindDuplicates = duplicates(arrayOfMessage);
        if (tofindDuplicates.length === 0){
            console.log(i)
        }
    }
}

uniqueMessage()
//
// console.log(uniqueSequence());
/**
console.log(
  signal[1087] + ' ' + signal[1088] + ' ' + signal[1089] + ' ' + signal[1091] + ' ' + signal[1092] + ' ' + signal[1093]
);
*/