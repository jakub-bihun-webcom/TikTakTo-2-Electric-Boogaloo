let fibMap = new Map();

/**
 * Funktion zum Berechnen der nten Fibonacci Zahl
 * @param {number} steps
 * @returns {number} Fibonacci Zahl
 */
function fibonacciRecursive(steps) {
  if (steps === 0) {
    return 0;
  }
  if (steps < 3) {
    return 1;
  }
  if (!fibMap.get(steps)) {
    fibMap.set(
      steps,
      fibonacciRecursive(steps - 1) + fibonacciRecursive(steps - 2)
    );
  }
  return fibMap.get(steps);
}
