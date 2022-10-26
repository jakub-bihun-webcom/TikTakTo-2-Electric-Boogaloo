/**
 * Gibt die Fibonacci Zahl nach einer bestimmten Anzahl von Schritten wieder
 * @param {number} steps Gibt die Position in der Fibonacci Zahl an
 * @returns {number} Die Fibonacci Zahl
 */
const fibJoshua = function (steps) {
    let Num1 = 0;
    let Num2 = 1;
    let Num3;

    if (steps === 0) {
        return Num1;
    } else if (steps === 1) {
        return Num2;
    }

    for (let index = 0; index < steps - 1; index++) {
        Num3 = Num1 + Num2;
        Num1 = Num2;
        Num2 = Num3;
    }

    return Num3;
};
