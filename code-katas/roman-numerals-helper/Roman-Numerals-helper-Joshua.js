/**
 * @param {object} RomanNumeralsJoshua Can turn roman numerals into numbers and the other way around
 */
const RomanNumeralsJoshua = {
  romanList: [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ],
  shortRomanList: ["I", "V", "X", "L", "C", "D", "M"],
  numberList: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  shortNumberList: [1, 5, 10, 50, 100, 500, 1000],

  /**
   * converts a number into a roman numeral
   * @param {number} input a Number from 0 > 4000
   * @returns {string} The according roman numeral
   */
  toRoman: function (input) {
    const orderedInput = this._convert(input);
    const romanNumerals = this._createOutput(orderedInput);
    return this._formatString(romanNumerals);
  },

  /**
   * converts a roman numeral into a number
   * @param {string} input a roman Numeral
   * @returns {number} the according number
   */
  fromRoman: function (input) {
    const inputArray = input.split("");
    const sum1 = [];
    const romanToNumber = this._convertRomanNumbersToNumbers(inputArray);
    return this._getSumOfNumbers(romanToNumber, sum1);
  },

  /**
   * Converts each roman numeral into its dedicated number
   * @param {array} inputArray The Roman numbers
   * @returns {array} Array of where each roman numeral was replaced with its dedicated number
   * @private
   */
  _convertRomanNumbersToNumbers: function (inputArray) {
    let sum = [];

    for (let i = 0; i < inputArray.length; i++) {
      for (let j = 0; j < this.shortNumberList.length; j++) {
        if (inputArray[i] === this.shortRomanList[j]) {
          sum.push(this.shortNumberList[j]);
        }
      }
    }
    return sum;
  },

  /**
   * Gets the sum of the numbers while considering the rules for converting a number into roman numerals
   * @param {array} romanToNumber Array with a number for each numeral
   * @param {array} sum1 Array to store the numbers
   * @returns {number} The final result
   * @private
   */
  _getSumOfNumbers: function (romanToNumber, sum1) {
    for (let i = 0; i < romanToNumber.length; i++) {
      for (let j = 0; j < this.shortNumberList.length; j++) {
        const shortNumber = this.shortNumberList[j];
        if (romanToNumber[i] === shortNumber) {
          const numberForLetter =
            shortNumber < romanToNumber[i + 1] ? -shortNumber : shortNumber;
          sum1.push(numberForLetter);
        }
      }
    }
    return sum1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  },

  /**
   * Splits the Number into its different components. Example: 1393 -> 1 thousand, 3 hundreds, 9 tens and 3 ones
   * @param {number} input The number which is to be converted into a Roman Number
   * @returns {array} Array of different components of the input number
   * @private
   */
  _convert: function (input) {
    let restCurrentNumber = input;

    return this.numberList.map((value) => {
      const currentNumber = Math.floor(restCurrentNumber / value);
      restCurrentNumber = restCurrentNumber % value;
      return currentNumber;
    });
  },

  /**
   * Turns the ordered input into its according Roman Numerals
   * @param {array} orderedInput the input number but split into its different components
   * @returns {array} The Roman numerals
   * @private
   */
  _createOutput(orderedInput) {
    const romanNumerals = [];

    for (let i = 0; i < orderedInput.length; i++) {
      if (orderedInput[i]) {
        let tempValue = orderedInput[i];
        for (let j = 0; j < tempValue; j++) {
          romanNumerals.push(this.romanList[i]);
        }
      }
    }

    return romanNumerals;
  },

  /**
   * Gets rid of the commas
   * @param {array} romanNumerals
   * @returns {string} The Roman numerals without the commas in between
   * @private
   */
  _formatString(romanNumerals) {
    const outputString = romanNumerals.toString();
    return outputString.replace(/,/g, "");
  },
};
