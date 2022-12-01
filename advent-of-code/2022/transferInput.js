import * as fs from 'fs';

export function inputToArray () {
    const inputFile = fs.readFileSync('day1-Calorie-Counting/input-joshua.txt', { encoding: 'utf8' });
    const input = inputFile.toString().trim().split('\n');
    return input
}

export function inputToString () {
    const inputFile = fs.readFileSync('day1-Calorie-Counting/input-joshua.txt', { encoding: 'utf8' });
    const input = inputFile
        .toString()
        .trim()
        .split('\n')
        .map(num => parseInt(num, 10));
    return input
}
console.log(typeof inputToArray())
