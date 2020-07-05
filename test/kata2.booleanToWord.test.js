const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns a string', () => {
    const result = booleanToWord();
    expect(typeof result).toBe('string');
  });
  it('returns the correct string', () => {
    expect(booleanToWord(true)).toBe("yes");
    expect(booleanToWord(false)).toBe("no");
  });
  it('throws an error if argument is not valid', () => {
    expect(booleanToWord(5)).toBe("not a boolean data type");
    expect(booleanToWord([true, false])).toBe("not a boolean data type");
    expect(booleanToWord("true")).toBe("not a boolean data type");
  });
});
