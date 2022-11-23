function isInterestingNiklas(number, awesomePhrases) {
  const numberPlusOne = number + 1;
  const numberPlusTwo = number + 2;

  if (numberPlusTwo < 100) {
    return 0;
  }

  if (checkNumber(number, awesomePhrases)) {
    return 2;
  } else if (checkNumber(numberPlusOne, awesomePhrases) || checkNumber(numberPlusTwo, awesomePhrases)) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Überprüft, alle Checks mit der aktuellen Meilenanzeige.
 * @param {number} number
 * @param {[number]} awesomePhrases
 * @returns
 */
function checkNumber(number, awesomePhrases) {
  return (
    (isAwesomePhrases(number, awesomePhrases) ||
      isFollowedByZeros(number) ||
      isSameDigit(number) ||
      isSequentialDecrementing(number) ||
      isSequentialIncrementing(number) ||
      isPalindrome(number)) &&
    number > 99
  );
}

/**
 * Überprüft, ob nach der ersten Ziffer nur noch Nullen folgen.
 * @param {number} number
 * @returns {boolean}
 */
function isFollowedByZeros(number) {
  const arrayOfNumber = numberToArray(number);
  arrayOfNumber.shift();
  return arrayOfNumber.every(i => i === 0);
}

/**
 * Überprüft, ob alle Ziffern der Zahl gleich sind.
 * @param {number} number
 * @returns {boolean}
 */
function isSameDigit(number) {
  const arrayOfNumber = numberToArray(number);
  const numbersSet = new Set(arrayOfNumber);
  return numbersSet.size === 1;
}

/**
 * Überprüft, ob alle Zahlen streng aufsteigend sind. 0 soll auf 9 folgen.
 * @param {number} number
 * @returns {boolean}
 */
function isSequentialIncrementing(number) {
  const arrayOfNumber = numberToArray(number);
  const isZero = arrayOfNumber.indexOf(0);
  if (isZero !== -1) {
    arrayOfNumber[isZero] = 10;
  }
  for (let i = 0; i < arrayOfNumber.length - 1; i++) {
    if (arrayOfNumber[i + 1] - arrayOfNumber[i] === 1) {
    } else return false;
  }
  return true;
}

/**
 * Überprüft, ob alle Zahlen streng absteigend sind. 0 soll auf 1 folgen.
 * @param {number} number
 * @returns {boolean}
 */
function isSequentialDecrementing(number) {
  const arrayOfNumber = numberToArray(number);
  for (let i = 0; i < arrayOfNumber.length - 1; i++) {
    if (arrayOfNumber[i] - arrayOfNumber[i + 1] === 1) {
    } else return false;
  }
  return true;
}

/**
 * Überprüft, ob die Zahl ein Palindrom ist.
 * @param {number} number
 * @returns {boolean}
 */
function isPalindrome(number) {
  const arrayOfNumber = numberToArray(number);
  const numberToCheck = Math.floor(arrayOfNumber.length / 2);
  for (let i = 0; i < numberToCheck; i++) {
    if (arrayOfNumber[i] === arrayOfNumber[arrayOfNumber.length - 1 - i]) {
    } else return false;
  }
  return true;
}

/**
 * Überprüft, ob die Zahl mit einer Zahl aus dem Array übereinstimmt.
 * @param {number} number
 * @param {[number]} awesomePhrases
 * @returns {boolean}
 */
function isAwesomePhrases(number, awesomePhrases) {
  return awesomePhrases.includes(number);
}

/**
 * Verwandelt die Zahl in ein Array
 * @param number
 * @returns {[number]}
 */
function numberToArray(number) {
  return Array.from(String(number), Number);
}
