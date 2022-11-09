/**
 * Ein Objekt, welches Zahlen in das römische Format und römische Zahlen in das Dezimalsystem umwandeln kann.
 */
 const RomanNumerals = {

    /**
     * Bricht die Zahl auf ihre Einer-, Zehner-, Hunderter-, Tausenderstelle herunter und gibt diese mit den römischen Parametern in die Konvertierung.
     * @param {number} number 
     * @returns String im RomanFormat
     */
    toRoman: function (number) {
      let romanOutput = [];
      const thousandPlace = Math.floor(number / 1000);
      const restOfThousand = number % 1000;
      const hundredPlace = Math.floor(restOfThousand / 100);
      const restOfHundred = restOfThousand % 100;
      const tenPlace = Math.floor(restOfHundred / 10);
      const restOfTen = restOfHundred % 10;
      const onePlace = Math.floor(restOfTen / 1);
  
      if (thousandPlace >= 1) {
        for (let i = 0; i < thousandPlace; i++) {
          romanOutput.push("M");
        }
      }
      this.converter(romanOutput, hundredPlace, "C", "D", "M");
      this.converter(romanOutput, tenPlace, "X", "L", "C");
      this.converter(romanOutput, onePlace, "I", "V", "X");
      romanOutputInString = romanOutput.join("");
      return romanOutputInString;
    },
  
    /**
     * Funktion, welche für alle Einer-, Zehner-, und Hunderterstellen die entsprechenden römischen Zeicen in ein Array pushed.
     * @param {[string]} romanOutput 
     * @param {number} number 
     * @param {string} ones 
     * @param {string} fives 
     * @param {string} tens 
     * @returns 
     */
    converter: function (romanOutput, number, ones, fives, tens) {
      if (number === 9) {
        romanOutput.push(`${ones}${tens}`);
        return;
      } else if (number >= 5) {
        romanOutput.push(`${fives}`);
        number -= 5;
        for (let i = 0; i < number; i++) {
          romanOutput.push(`${ones}`);
        }
        return;
      } else if (number === 4) {
        romanOutput.push(`${ones}${fives}`);
        return;
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
      let romanInArray = [];
      this.convertToNumber(romanInArray, romanInput);
  
      return this.arrayToNumber(romanInArray);
    },
  
    /**
     * Für jeden Buchstaben in dem römischen String werden die entsprechenden Zahlen in ein Array gepushed.
     * @param {[number]} romanInArray 
     * @param {string} romanInput 
     */
    convertToNumber: function (romanInArray, romanInput) {
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
    arrayToNumber: function (romanInArray) {
      let numberOutput = [];
      for (let i = 0; i < romanInArray.length - 1; i++) {
        if (romanInArray[i] >= romanInArray[i + 1]) {
          numberOutput.push(romanInArray[i]);
        } else {
          numberOutput.push(-romanInArray[i]);
        }
      }
      numberOutput.push(romanInArray[romanInArray.length - 1])
      const sum = numberOutput.reduce((counter, value) => {
        return counter + value;
      }, 0);
      console.log(sum);
      return sum;
    },
  };
