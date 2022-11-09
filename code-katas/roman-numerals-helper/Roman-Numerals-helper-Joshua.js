/**
 * @param {object} RomanNumeralsJoshua Can turn roman numerals into numbers and the other way around
 */
const RomanNumeralsJoshua = {
    romanNumbersArray: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],

    /**
     * converts a number into a roman numeral
     * @param {number} input a Number from 0 > 4000
     * @returns {string} The according roman numeral
     */
    toRoman: function (input) {
        const orderedInput = this.conversion(input);
        const romanNumerals = this.createOutput(orderedInput);
        return this.formateString(romanNumerals);
    },

    /**
     * converts a roman numeral into a number
     * @param {string} input a roman Numeral
     * @returns {number} the according number
     */
    fromRoman: function (input) {
        let inputArray = input.split('');
        let sum1 = [];
        const romanToNumber = this.convertRomanNumbersToNumbers(inputArray);
        return this.getSumOfNumbers(romanToNumber, sum1);
    },

    /**
     * Converts each roman numeral into its dedicated number
     * @param {array} inputArray The Roman numbers
     * @returns {array} Array of where each roman numeral was replaced with its dedicated number
     */
    convertRomanNumbersToNumbers: function (inputArray) {
        let sum = [];
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === "I") {
                sum.push(1);
            } else if (inputArray[i] === "V") {
                sum.push(5);
            } else if (inputArray[i] === "X") {
                sum.push(10);
            } else if (inputArray[i] === "L") {
                sum.push(50);
            } else if (inputArray[i] === "C") {
                sum.push(100);
            } else if (inputArray[i] === "D") {
                sum.push(500);
            } else if (inputArray[i] === "M") {
                sum.push(1000);
            }
        }
        return sum;
    },

    /**
     * Gets the sum of the numbers while considering the rules for converting a number into roman numerals
     * @param {array} romanToNumber Array with a number for each numeral
     * @param {array} sum1 Array to store the numbers
     * @returns {number} The final result
     */
    getSumOfNumbers: function (romanToNumber, sum1) {
        for (let i = 0; i < romanToNumber.length; i++) {
            if (1 === romanToNumber[i]) {
                sum1.push((1 < romanToNumber[i + 1]) ? -1 : 1);
            }
            if (5 === romanToNumber[i]) {
                sum1.push((5 < romanToNumber[i + 1]) ? -5 : 5);
            }
            if (10 === romanToNumber[i]) {
                sum1.push((10 < romanToNumber[i + 1]) ? -10 : 10);
            }
            if (50 === romanToNumber[i]) {
                sum1.push((50 < romanToNumber[i + 1]) ? -50 : 50);
            }
            if (100 === romanToNumber[i]) {
                sum1.push((100 < romanToNumber[i + 1]) ? -100 : 100);
            }
            if (500 === romanToNumber[i]) {
                sum1.push((500 < romanToNumber[i + 1]) ? -500 : 500);
            }
            if (1000 === romanToNumber[i]) {
                sum1.push((1000 < romanToNumber[i + 1]) ? -1000 : 1000);
            }
        }

        let addition = 0;
        for (let i = 0; i < sum1.length; i++) {
            addition += sum1[i];
        }
        return addition;
    },

    /**
     * Splits the Number into its different components. Example: 1393 -> 1 thousand, 3 hundreds, 9 tens and 3 ones
     * @param {number} input The number which is to be converted into a Roman Number
     * @returns {array} Array of different components of the input number
     */
    conversion: function (input) {
        let orderedInput = [];
        let restCurrentNumber = input;
        let numberList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        for (let i = 0; i < numberList.length; i++) {
            const currentNumber = Math.floor(restCurrentNumber / numberList[i]);
            restCurrentNumber = restCurrentNumber % numberList[i];
            orderedInput.push(currentNumber);
        }

        return orderedInput
    },

    /**
     * Turns the ordered input into its according Roman Numerals
     * @param {array} orderedInput the input number but split into its different components
     * @returns {array} The Roman numerals
     */
    createOutput(orderedInput) {
        const romanNumerals = [];

        for (let i = 0; i < orderedInput.length; i++) {
            if (orderedInput[i]) {
                let tempValue = orderedInput[i];
                for (let j = 0; j < tempValue; j++) {
                    romanNumerals.push(this.romanNumbersArray[i]);
                }
            }
        }
        return romanNumerals;
    },

    /**
     * Gets rid of the commas
     * @param {array} romanNumerals
     * @returns {string} The Roman numerals without the commas in between
     */
    formateString(romanNumerals) {
        let outputString = romanNumerals.toString();
        return outputString.replace(/,/g, "");
    },
};
