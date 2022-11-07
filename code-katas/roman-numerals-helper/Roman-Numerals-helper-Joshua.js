const RomanNumeralsJoshua = {
        romanNumbersArray: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],

        toRoman: function (input) {
            const orderedInput = this.conversion(input);

            console.log(orderedInput);

            const testOutput = this.createOutput(orderedInput);

            const output = this.formateString(testOutput);

            return output;
        },

        fromRoman: function (input) {

            let inputArray = input.split('');
            let sum = [];
            let sum1 =[];


            for (let i = 0; i < inputArray.length; i++) {
                if (inputArray[i] === "I") {
                    sum.push(1)
                } else if (inputArray[i] === "V") {
                    sum.push(5)
                } else if (inputArray[i] === "X") {
                    sum.push(10)
                } else if (inputArray[i] === "L") {
                    sum.push(50)
                } else if (inputArray[i] === "C") {
                    sum.push(100)
                } else if (inputArray[i] === "D") {
                    sum.push(500)
                } else if (inputArray[i] === "M") {
                    sum.push(1000)
                }

            }

            for (let i = 0; i < sum.length; i++) {
                if (1 === sum[i]) {
                    if (1 < sum[i + 1]){
                        sum1.push(-1)
                    } else {
                        sum1.push(1);
                    }
                }
                if (5 === sum[i]) {
                    if (5 < sum[i + 1]){
                        sum1.push(-5)
                    } else {
                        sum1.push(5);
                    }
                }
                if (10 === sum[i]) {
                    if (10 < sum[i + 1]){
                        sum1.push(-10)
                    } else {
                        sum1.push(10);
                    }
                }
                if (50 === sum[i]) {
                    if (50 < sum[i + 1]){
                        sum1.push(-50)
                    } else {
                        sum1.push(50);
                    }
                }
                if (100 === sum[i]) {
                    if (100 < sum[i + 1]){
                        sum1.push(-100)
                    } else {
                        sum1.push(100);
                    }
                }
                if (500 === sum[i]) {
                    if (500 < sum[i + 1]){
                        sum1.push(-500)
                    } else {
                        sum1.push(500);
                    }
                }
                if (1000 === sum[i]) {
                    if (1000 < sum[i + 1]){
                        sum1.push(-1000)
                    } else {
                        sum1.push(1000);
                    }
                }

            }


            let addition = 0;

            for (let i = 0; i < sum1.length;
                 i++
            ) {
                addition += sum1[i];
            }
            return addition;


        }
        ,


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
        }
        ,

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
        }
        ,

        formateString(testOutput) {
            let outputString = testOutput.toString()

            let output = outputString.replace(/,/g, "")
            return output;
        }
        ,
    }


;
RomanNumeralsJoshua.toRoman();
RomanNumeralsJoshua.fromRoman()


/*
//pseudocode
Schaue, ob der Input eine Number oder ein String ist. Bei eine Number mache:

For schleife: Nehme weinen Wert (Tausend, Hundert, Fünfzig etc. ) für jede ganze Zahl in diesem Wert printe einmal den
jeweiligen buchstaben und subtrahieren 1 vo, Tausender Wert. Wenn dieser Wert Null entspricht springe zum Nächsten Wert.

Bei einem String mache:
*/

