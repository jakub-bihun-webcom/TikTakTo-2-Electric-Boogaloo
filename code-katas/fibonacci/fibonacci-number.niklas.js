/**
 * Funktion zum Ausrechnen der Fibonacci-Zahl
 * @param {number} steps
 * @returns {number}
 */
function fibonacciNiklas(steps) {
  let number1 = 0;
  let number2 = 1;

  if (steps === 0) {
    return number1;
  } else if (steps === 1) {
    return number2;
  }

  let fibNumber;

  for (let index = 0; index < steps - 1; index++) {
    fibNumber = number1 + number2;
    console.log(fibNumber);
    number1 = number2;
    number2 = fibNumber;
  }

  return fibNumber;
}
