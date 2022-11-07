describe("Human readable duration format", () => {
    const executeTests = (functionToTest) => {
        expect(functionToTest(0)).toBe("now");
        expect(functionToTest(1)).toBe("1 second");
        expect(functionToTest(62)).toBe("1 minute and 2 seconds");
        expect(functionToTest(120)).toBe("2 minutes");
        expect(functionToTest(3600)).toBe("1 hour");
        expect(functionToTest(3662)).toBe("1 hour, 1 minute and 2 seconds");
        expect(functionToTest(8244008)).toBe("95 days, 10 hours and 8 seconds");
    };

    it("Niklas", () => {
        executeTests(formatDurationNiklas);
    });

    // it("Joshua", () => {
    //     executeTests(formatDurationJoshua);
    // });

    it("Stefan", () => {
        executeTests(formatDurationStefan);
    });
});
