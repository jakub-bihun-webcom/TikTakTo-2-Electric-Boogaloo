const RomanNumeralsJoshua = {
        romanNumbersArray: ["M", "D", "C", "L", "X", "V", "IV", "I"],

        toRoman: function (input) {
            const orderedInput = this.conversion(input);

            const testOutput = this.createOutput(orderedInput);

            const output = this.formateString(testOutput);

            return output;
        },

        conversion: function (input) {

            let orderedInput = [];

            const inputThousand = Math.floor(input / 1000);
            const restOfThousand = input % 1000;
            orderedInput.push(inputThousand);
            const inputFiveHundred = Math.floor(restOfThousand / 500);
            const restOfFiveHundred = restOfThousand % 500;
            orderedInput.push(inputFiveHundred);
            const inputHundred = Math.floor(restOfFiveHundred / 100);
            const restOfHundred = restOfFiveHundred % 100;
            orderedInput.push(inputHundred);
            const inputFifty = Math.floor(restOfHundred / 50);
            const restOfFifty = restOfHundred % 50;
            orderedInput.push(inputFifty);
            const inputTen = Math.floor(restOfFifty / 10);
            const restOfTen = restOfFifty % 10;
            orderedInput.push(inputTen);
            const inputFive = Math.floor(restOfTen / 5);
            const restOfFive = restOfTen % 5;
            orderedInput.push(inputFive);
            const inputFour = Math.floor(restOfFive / 4);
            const restOfFour = restOfFive % 4;
            orderedInput.push(inputFour);
            const inputOne = Math.floor(restOfFour / 1);
            orderedInput.push(inputOne);

            return (orderedInput);
        },

        createOutput(orderedInput) {
            const testOutput = [];

            for (let i = 0; i < orderedInput.length; i++) {
                if (orderedInput[i]) {
                    let tempValue = orderedInput[i];
                    for (let j = 0; j < tempValue; j++) {
                        testOutput.push(this.romanNumbersArray[i]);
                    }
                }
            }

            return testOutput;
        },

        formateString(testOutput) {
            let outputString = testOutput.toString()

            let output = outputString.replace(/,/g, "")
            return output;
        },
    }


;
RomanNumeralsJoshua.toRoman();


/*
//pseudocode
Schaue, ob der Input eine Number oder ein String ist. Bei eine Number mache:

For schleife: Nehme weinen Wert (Tausend, Hundert, Fünfzig etc. ) für jede ganze Zahl in diesem Wert printe einmal den
jeweiligen buchstaben und subtrahieren 1 vo, Tausender Wert. Wenn dieser Wert Null entspricht springe zum Nächsten Wert.

Bei einem String mache:
*/

