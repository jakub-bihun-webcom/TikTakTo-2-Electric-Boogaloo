describe("Fibonacci Number should be", () => {
    const executeTests = (functionToTest) => {
        expect(functionToTest(17)).toBe(1597);
        //expect(functionToTest(20)).toBe(6765);
        //expect(functionToTest(0)).toBe(0);
        //expect(functionToTest(4)).toBe(3);
        //expect(functionToTest(1)).toBe(1);
    }

    it("Niklas", () => {
        executeTests(fibonacciNiklas);
    });
    it("Joshua", () => {
        executeTests(fibJoshua);
    });

});
