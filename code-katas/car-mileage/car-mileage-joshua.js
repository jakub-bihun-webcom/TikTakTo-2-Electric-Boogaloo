/**
 * @param number
 * @param awesomePhrase
 * @returns {number}
 */
function isInteresting(number, awesomePhrase) {
  return carMileage.isInteresting(number, awesomePhrase);
}

const carMileage = {
  /**
   * Checkt, ob eine gegebene Zahl interessant ist oder nicht
   * @param number
   * @param awesomePhrase
   * @returns {number}
   */
  isInteresting: function (number, awesomePhrase) {
    const numberPlusOne = number + 1;
    const numberPlusTwo = number + 2;
    const awesomeNumber = this._numberIsAwesome(number, awesomePhrase);
    const awesomeNumberPlusOne = this._numberIsAwesome(numberPlusOne, awesomePhrase);
    const awesomeNumberPlusTwo = this._numberIsAwesome(numberPlusTwo, awesomePhrase);

    if (awesomeNumber) {
      return 2;
    } else if (awesomeNumberPlusOne || awesomeNumberPlusTwo) {
      return 1;
    } else {
      return 0;
    }
  },

  /**
   * @param number
   * @param awesomePhrase
   * @returns {boolean|number}
   * @private
   */
  _numberIsAwesome: function (number, awesomePhrase) {
    if (number < 100) {
      return 0;
    }
    const zeros = this._checkZeros(number);
    const sameNumbers = this._checkSameNumbers(number);
    const countingUp = this._checkCountingUp(number);
    const countingDown = this._checkCountingDown(number);
    const palindrome = this._checkPalindrome(number);
    const isAwesomePhrase = this._checkAwesomePhrase(number, awesomePhrase);
    return zeros || sameNumbers || countingUp || countingDown || palindrome || isAwesomePhrase;
  },

  /**
   * @param number
   * @returns {this is number[]}
   * @private
   */
  _checkZeros: function (number) {
    const numberArray = Array.from(String(number), Number);
    numberArray.shift();
    return numberArray.every(i => i === 0);
  },

  /**
   * @param number
   * @returns {this is number[]}
   * @private
   */
  _checkSameNumbers: function (number) {
    const numberArray = Array.from(String(number), Number);
    return numberArray.every(i => i === numberArray[0]);
  },

  /**
   * @param number
   * @returns {boolean}
   * @private
   */
  _checkCountingUp: function (number) {
    const numberArray = Array.from(String(number), Number);
    const transformedArray = [];
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] === 0) {
        transformedArray.push(10);
      } else {
        transformedArray.push(numberArray[i]);
      }
    }
    let passedCheck = false;
    for (let i = 0; i < transformedArray.length - 1; i++) {
      if (transformedArray[i] + 1 !== transformedArray[i + 1]) {
        passedCheck = true;
      }
    }
    return !passedCheck;
  },

  /**
   * @param number
   * @returns {boolean}
   * @private
   */
  _checkCountingDown: function (number) {
    const numberArray = Array.from(String(number), Number);
    let passedCheck = false;
    for (let i = 0; i < numberArray.length - 1; i++) {
      if (numberArray[i] - 1 !== numberArray[i + 1]) {
        passedCheck = true;
      }
    }
    return !passedCheck;
  },

  /**
   * @param number
   * @returns {boolean}
   * @private
   */
  _checkPalindrome: function (number) {
    const numberArray = Array.from(String(number), Number);
    const reverseArray = [];
    for (let i = numberArray.length - 1; i >= 0; i--) {
      reverseArray.push(numberArray[i]);
    }
    const reverseArrayToString = reverseArray.toString();
    const numberArrayToString = numberArray.toString();
    return reverseArrayToString === numberArrayToString;
  },

  /**
   * @param number
   * @param awesomePhrase
   * @returns {*}
   * @private
   */
  _checkAwesomePhrase: function (number, awesomePhrase) {
    return awesomePhrase.includes(number);
  }
};
