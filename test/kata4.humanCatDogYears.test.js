const { humanCatDogYears } = require("../src");
const { TestScheduler } = require("jest");

describe("converts human years to cat and dog years", () => {
    test("returns an array of 3 items", () => {
        const input = 10;
        const result = humanCatDogYears(input);
        expect(typeof result).toBe("object");
        expect(result.length).toBe(3);
    });
    test("returns an array of 3 numbers [humanYears, catYears, dogYears]", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    });
    test("throws an error if input is not a number", () => {
        expect(humanCatDogYears("str")).toBe("Error: invalid input");
    });
});