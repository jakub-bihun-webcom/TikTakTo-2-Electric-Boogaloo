/**
 * Funktion für die Grenzfälle der Fibonacci Zahl
 * @param {number} steps 
 * @returns {number}
 */
function fibonacciNiklas(steps) {
  if (steps === 0){
    return 0
  } else if (steps === 1){
    return 1
  }
  return fibonacciCalculator(steps);
}

/**
 * Funktion zum ausrechner der Fibonacci Zahl
 * @param {number} steps 
 * @returns {number}
 */
function fibonacciCalculator(steps){
  let number1 = 0;
  let number2 = 1;
  let fibNumber;
  let stepsMinusOne = steps - 1;

  for (let index = 0; index < stepsMinusOne; index++) {
    fibNumber = number1 + number2;
    number1 = number2;
    number2 = fibNumber;
  }
  
  return fibNumber;
}
