/**
 * @param {number} number
 * @param {number[]} awesomePhrase
 * @returns {number}
 */
function isInteresting(number, awesomePhrase) {
  return carMileage.isInteresting(number, awesomePhrase);
}

const carMileage = {
  /**
   * Checkt, ob eine gegebene Zahl interessant ist oder nicht
   * @param {number} number
   * @param {number[]} awesomePhrase
   * @returns {number}
   */
  isInteresting: function (number, awesomePhrase) {
    const numberPlusOne = number + 1;
    const numberPlusTwo = number + 2;
    const numberIsAwesome = this._numberIsAwesome(number, awesomePhrase);
    const numberPlusOneIsAwesome = this._numberIsAwesome(numberPlusOne, awesomePhrase);
    const numberPlusTwoIsAwesome = this._numberIsAwesome(numberPlusTwo, awesomePhrase);

    if (numberIsAwesome) {
      return 2;
    }
    if (numberPlusOneIsAwesome || numberPlusTwoIsAwesome) {
      return 1;
    }
      return 0;
  },

  /**
   * @param {number} number
   * @param {number[]} awesomePhrase
   * @returns {boolean}
   * @private
   */
  _numberIsAwesome: function (number, awesomePhrase) {
    if (number < 100) {
      return false;
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
   * @param {number} number
   * @returns {boolean}
   * @private
   */
  _checkZeros: function (number) {
    const numberArray = Array.from(String(number), Number);
    numberArray.shift();
    return numberArray.every(i => i === 0);
  },

  /**
   *
   * @param {number} number
   * @returns {boolean}
   * @private
   */
  _checkSameNumbers: function (number) {
    const numberArray = Array.from(String(number), Number);
    return numberArray.every(i => i === numberArray[0]);
  },

  /**
   * @param {number} number
   * @returns {boolean}
   * @private
   */
  _checkCountingUp: function (number) {
    const numberArray = Array.from(String(number), Number);

    const transformedArray = numberArray.map(number => {
      if (number === 0) {
        return 10;
      } else {
        return number;
      }
    });

    for (let i = 0; i < transformedArray.length - 1; i++) {
      if (transformedArray[i] + 1 !== transformedArray[i + 1]) {
        return false;
      }
    }

    return true;
  },

  /**
   * @param {number} number
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
   * @param {number} number
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
   * @param {number} number
   * @param awesomePhrase
   * @returns {boolean}
   * @private
   */
  _checkAwesomePhrase: function (number, awesomePhrase) {
    return awesomePhrase.includes(number);
  }
};
