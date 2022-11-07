const RomanNumeralsJoshua = {
        romanNumbersArray: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],

        toRoman: function (input) {
            const orderedInput = this.conversion(input);

             console.log(orderedInput);

            const testOutput = this.createOutput(orderedInput);

            const output = this.formateString(testOutput);

            return output;
        },

        conversion: function (input) {

            let orderedInput = [];

            const inputThousand = Math.floor(input / 1000);
            const restOfThousand = input % 1000;
            orderedInput.push(inputThousand);
            const inputNineHundred = Math.floor(restOfThousand / 900);
            const restOfNineHundred = restOfThousand % 900;
            orderedInput.push(inputNineHundred);
            const inputFiveHundred = Math.floor(restOfNineHundred / 500);
            const restOfFiveHundred = restOfNineHundred % 500;
            orderedInput.push(inputFiveHundred);
            const inputFourHundred = Math.floor(restOfFiveHundred / 400);
            const restOfFourHundred = restOfFiveHundred % 400;
            orderedInput.push(inputFourHundred);
            const inputHundred = Math.floor(restOfFourHundred / 100);
            const restOfHundred = restOfFourHundred % 100;
            orderedInput.push(inputHundred);
            const inputNinety = Math.floor(restOfHundred / 90);
            const restOfNinety = restOfHundred % 90;
            orderedInput.push(inputNinety);
            const inputFifty = Math.floor(restOfNinety / 50);
            const restOfFifty = restOfNinety % 50;
            orderedInput.push(inputFifty);
            const inputForty = Math.floor(restOfFifty / 40);
            const restOfForty = restOfFifty % 40;
            orderedInput.push(inputForty);
            const inputTen = Math.floor(restOfForty / 10);
            const restOfTen = restOfForty % 10;
            orderedInput.push(inputTen);
            const inputNine = Math.floor(restOfTen / 9);
            const restOfNine = restOfTen % 9;
            orderedInput.push(inputNine);
            const inputFive = Math.floor(restOfNine / 5);
            const restOfFive = restOfNine % 5;
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

