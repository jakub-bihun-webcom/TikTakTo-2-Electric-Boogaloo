/**
 * Gibt die Fibonacci Zahl nach einer bestimmten Anzahl von Schritten wieder
 * @param {number} steps Gibt die Position in der Fibonacci Zahl an
 * @returns {number} Die Fibonacci Zahl
 */
const fibJoshua = function (steps) {
  let num1 = 0;
  let num2 = 1;
  let num3;

  if (steps === 0) {
    return num1;
  } else if (steps === 1) {
    return num2;
  }

  for (let index = 0; index < steps - 1; index++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }

  return num3;
};
