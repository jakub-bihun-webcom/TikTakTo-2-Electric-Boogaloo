describe("Roman Numerals Helper", () => {
    it("Niklas", () => {
        // TODO
    });

    it("Joshua", () => {
        expect(RomanNumeralsJoshua.toRoman(1000)).toBe('M');
        expect(RomanNumeralsJoshua.toRoman(4)).toBe('IV');
        expect(RomanNumeralsJoshua.toRoman(1)).toBe('I');
        expect(RomanNumeralsJoshua.toRoman(1990)).toBe('MCMXC');
        expect(RomanNumeralsJoshua.toRoman(2008)).toBe('MMVIII');

        expect(RomanNumeralsJoshua.fromRoman("XXI")).toBe(21);
        expect(RomanNumeralsJoshua.fromRoman("I")).toBe(1);
        expect(RomanNumeralsJoshua.fromRoman("IV")).toBe(4);
        expect(RomanNumeralsJoshua.fromRoman("MMVIII")).toBe(2008);
        expect(RomanNumeralsJoshua.fromRoman("MDCLXVI")).toBe(1666);



    });
});
