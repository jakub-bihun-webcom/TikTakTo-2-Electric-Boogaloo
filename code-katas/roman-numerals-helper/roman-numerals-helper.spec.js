describe("Roman Numerals Helper", () => {
  it("Niklas", () => {
    expect(RomanNumerals.toRoman(1000)).toBe("M");
    expect(RomanNumerals.toRoman(4)).toBe("IV");
    expect(RomanNumerals.toRoman(1)).toBe("I");
    expect(RomanNumerals.toRoman(1990)).toBe("MCMXC");
    expect(RomanNumerals.toRoman(2008)).toBe("MMVIII");

    expect(RomanNumerals.fromRoman("XXI")).toBe(21);
    expect(RomanNumerals.fromRoman("I")).toBe(1);
    expect(RomanNumerals.fromRoman("IV")).toBe(4);
    expect(RomanNumerals.fromRoman("MMVIII")).toBe(2008);
    expect(RomanNumerals.fromRoman("MDCLXVI")).toBe(1666);
  });

  it("Joshua", () => {
    expect(RomanNumeralsJoshua.toRoman(1000)).toBe("M");
    expect(RomanNumeralsJoshua.toRoman(4)).toBe("IV");
    expect(RomanNumeralsJoshua.toRoman(1)).toBe("I");
    expect(RomanNumeralsJoshua.toRoman(1990)).toBe("MCMXC");
    expect(RomanNumeralsJoshua.toRoman(2008)).toBe("MMVIII");
    expect(RomanNumeralsJoshua.toRoman(69420)).toBe(
      "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDXX"
    );
    expect(RomanNumeralsJoshua.toRoman(99999)).toBe(
      "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCMXCIX"
    );

    expect(RomanNumeralsJoshua.fromRoman("XXI")).toBe(21);
    expect(RomanNumeralsJoshua.fromRoman("I")).toBe(1);
    expect(RomanNumeralsJoshua.fromRoman("IV")).toBe(4);
    expect(RomanNumeralsJoshua.fromRoman("MMVIII")).toBe(2008);
    expect(RomanNumeralsJoshua.fromRoman("MDCLXVI")).toBe(1666);
    expect(
      RomanNumeralsJoshua.fromRoman(
        "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCMXCIX"
      )
    ).toBe(99999);
    expect(
      RomanNumeralsJoshua.fromRoman(
        "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDXX"
      )
    ).toBe(69420);
  });
});
