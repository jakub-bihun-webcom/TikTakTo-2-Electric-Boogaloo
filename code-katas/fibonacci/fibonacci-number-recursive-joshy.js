/**
 * @param {number} steps Die Stelle in der fibonacci Formel 
 * @param {object} value Der Wert für die Stelle in der fibonacci Formel
 * @returns {number} Die Fibonacci Zahl an der stelle "steps"
 * Konvertiert die Eingabe in die zutreffende Fibonacci Zahl.
 * Das ganze passiert rekursiv.
 */
const fibonacciRecursive = (steps, value = {}) => {
    if (steps === 0) {
        return 0;
    } else if (steps <= 2) {
        return 1;
    }

    if (value[steps]) {
        return value[steps];
    }

    value[steps] = fibonacciRecursive(steps - 1, value) + fibonacciRecursive(steps - 2, value);
    return value[steps];
};
