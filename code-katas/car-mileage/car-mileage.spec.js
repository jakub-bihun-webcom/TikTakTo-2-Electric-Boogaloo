describe('Catching Car Mileage Numbers:', () => {
  const executeTests = functionToTest => {
    expect(functionToTest(3, [1337, 256])).toBe(0);
    expect(functionToTest(1336, [1337, 256])).toBe(1);
    expect(functionToTest(1337, [1337, 256])).toBe(2);
    expect(functionToTest(11208, [1337, 256])).toBe(0);
    expect(functionToTest(11209, [1337, 256])).toBe(1);
    expect(functionToTest(11211, [1337, 256])).toBe(2);
    expect(functionToTest(87654, [1337, 256])).toBe(2);
  };

  it('Joshua', () => {
    executeTests(isInteresting);
  });
});
