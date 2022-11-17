const carMileage = {

    isInteresting: function (number, awesomePhrase) {
        const numberPlusOne = number + 1
        const numberPlusTwo = number + 2
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

    _numberIsAwesome: function (number, awesomePhrase) {
        const zeros = this._checkZeros(number);
        const sameNumbers = this._checkSameNumbers(number);
        const countingUp = this._checkCountingUp(number);
        const countingDown = this._checkCountingDown(number);
        const palindrome = this._checkPalindrome(number);
        const isAwesomePhrase = this._checkAwesomePhrase(number, awesomePhrase)

        if (zeros || sameNumbers || countingUp || countingDown || palindrome || isAwesomePhrase === 2) {
            return true
        }
    },

    _checkZeros: function (number) {
        const numberArray = Array.from(String(number), Number);
        numberArray.shift();
        const followedByZeros = numberArray.every(i => i === 0);
        if (followedByZeros){
            return true
        } else {
            return false
        }
    },
    _checkSameNumbers: function (number) {
        const numberArray = Array.from(String(number), Number);
        const allAreSame = numberArray.every(i => i === numberArray[0])
        return allAreSame
    },

    _checkCountingUp: function (number) {
    },

    _checkCountingDown: function (number) {
    },

    _checkPalindrome: function (number) {
    },

    _checkAwesomePhrase: function (number, awesomePhrase) {
    },

}
let solution = carMileage.isInteresting(10, 3999);
console.log('solution : ' + solution)