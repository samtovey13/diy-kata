const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(30, 67)).toBe("I should be there in 0.5 hours.");
    expect(reachDestination(30, 40)).toBe("I should be there in 1 hours.");
  });
});
