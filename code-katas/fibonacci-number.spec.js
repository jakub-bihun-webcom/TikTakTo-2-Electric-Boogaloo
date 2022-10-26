describe("Fibonacci Number should be", () => {
    const executeTests = (functionToTest) => {
        expect(fibonacciNiklas(17)).toBe(1597);
        expect(fibonacciNiklas(20)).toBe(6765);
        expect(fibonacciNiklas(0)).toBe(0);
        expect(fibonacciNiklas(4)).toBe(3);
    }

    it("Niklas", () => {
        executeTests(fibonacciNiklas);
    });

});