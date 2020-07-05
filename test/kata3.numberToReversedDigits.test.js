const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });
  test("throws an error if argument is not a number", () => {
    expect(numberToReversedDigits("string")).toBe("Error: invalid input type");
    expect(numberToReversedDigits([1, 2])).toBe("Error: invalid input type");
    expect(numberToReversedDigits(true)).toBe("Error: invalid input type");
  });
});
