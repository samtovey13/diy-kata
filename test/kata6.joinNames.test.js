const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toBe('Bart, Lisa & Maggie');
    expect(joinNames([{name: 'Aang'}, {name: 'Momo'}, {name: 'Appa'}, {name: 'Sokka'}, {name: 'Katara'}, {name: 'Toph'}]))
    .toBe('Aang, Momo, Appa, Sokka, Katara & Toph');
  });
  test("returns string of single name when given only 1 object", () => {
    expect(joinNames([{name: 'Madonna'}])).toBe('Madonna');
  });
  test("works for 2 objects", () => {
    expect(joinNames([{name: 'Bonnie'}, {name: 'Clyde'}])).toBe('Bonnie & Clyde');
  });
});
