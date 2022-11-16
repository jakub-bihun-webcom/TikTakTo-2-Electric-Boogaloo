/**
 * Ein Objekt, welches Zahlen in das römische Format und römische Zahlen in das Dezimalsystem umwandeln kann.
 */
// TODO: Methoden auf private setzen (mit _ davor und JSDoc anpassen)
const RomanNumerals = {
  /**
   * Bricht die Zahl auf ihre Einer-, Zehner-, Hunderter-, Tausenderstelle herunter und gibt diese mit den römischen Parametern in die Konvertierung.
   * @param {number} number
   * @returns {string} String im RomanFormat
   */
  toRoman: function (number) {
    const romanOutput = [];
    const thousandPlace = Math.floor(number / 1000);
    const restOfThousand = number % 1000;
    const hundredPlace = Math.floor(restOfThousand / 100);
    const restOfHundred = restOfThousand % 100;
    const tenPlace = Math.floor(restOfHundred / 10);
    const restOfTen = restOfHundred % 10;
    const onePlace = Math.floor(restOfTen);

    if (thousandPlace >= 1) {
      for (let i = 0; i < thousandPlace; i++) {
        romanOutput.push("M");
      }
    }

    this._convert(romanOutput, hundredPlace, "C", "D", "M");
    this._convert(romanOutput, tenPlace, "X", "L", "C");
    this._convert(romanOutput, onePlace, "I", "V", "X");

    return romanOutput.join("");
  },

  /**
   * Funktion, welche für alle Einer-, Zehner-, und Hunderterstellen die entsprechenden römischen Zeichen in ein Array pushed.
   * @param {[string]} romanOutput
   * @param {number} number
   * @param {string} ones
   * @param {string} fives
   * @param {string} tens
   * @returns
   */
  _convert: function (romanOutput, number, ones, fives, tens) {
    if (number === 9) {
      romanOutput.push(`${ones}${tens}`);
    } else if (number >= 5) {
      romanOutput.push(`${fives}`);
      number -= 5;

      for (let i = 0; i < number; i++) {
        romanOutput.push(`${ones}`);
      }
    } else if (number === 4) {
      romanOutput.push(`${ones}${fives}`);
    } else if (number >= 1) {
      for (let i = 0; i < number; i++) {
        romanOutput.push(`${ones}`);
      }
    }
  },

  /**
   * Funktion, die einen String im römischen Zahlenformat entgegennimmt und in das Dezimalsystem umwandelt.
   * @param {string} romanInput
   * @returns Wert der römischen Zahl in Nummern
   */
  fromRoman: function (romanInput) {
    const romanInArray = [];

    this._convertToNumber(romanInArray, romanInput);

    return this._arrayToNumber(romanInArray);
  },

  /**
   * Für jeden Buchstaben in dem römischen String werden die entsprechenden Zahlen in ein Array gepushed.
   * @param {[number]} romanInArray
   * @param {string} romanInput
   */
  _convertToNumber: function (romanInArray, romanInput) {
    for (let i in romanInput) {
      if (romanInput[i] === "I") {
        romanInArray.push(1);
      } else if (romanInput[i] === "V") {
        romanInArray.push(5);
      } else if (romanInput[i] === "X") {
        romanInArray.push(10);
      } else if (romanInput[i] === "L") {
        romanInArray.push(50);
      } else if (romanInput[i] === "C") {
        romanInArray.push(100);
      } else if (romanInput[i] === "D") {
        romanInArray.push(500);
      } else if (romanInput[i] === "M") {
        romanInArray.push(1000);
      }
    }
  },

  /**
   * Alle Zahlen werden unter Berücksichtigung der römischen Schreibweise addiert.
   * @param {*} romanInArray
   * @returns
   */
  _arrayToNumber: function (romanInArray) {
    const numberOutput = [];

    // TODO: durch map() ersetzen
    for (let i = 0; i < romanInArray.length - 1; i++) {
      if (romanInArray[i] >= romanInArray[i + 1]) {
        numberOutput.push(romanInArray[i]);
      } else {
        numberOutput.push(-romanInArray[i]);
      }
    }

    numberOutput.push(romanInArray[romanInArray.length - 1]);

    const sum = numberOutput.reduce((counter, value) => {
      return counter + value;
    }, 0);

    return sum;
  },
};
