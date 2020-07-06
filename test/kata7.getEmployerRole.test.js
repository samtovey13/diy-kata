const { getEmployerRole } = require("../src");

const employees = [{

  name: 'Satti',

  role: 'Developer'

}, {

  name: 'Jenny',

  role: 'Sales Associate'

}, {

  name: 'Javid',

  role: 'Human Recommended Reading Assistant'
}, {

  name: 'Matthew',

}];

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Javid', employees)).toBe('Human Recommended Reading Assistant');
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate');
  });
  test("throws an error if no matching name found", () => {
    expect(getEmployerRole('Spongebob', employees)).toBe('Error: employee name not recognised');
  });
  test("throws an error if no corresponding 'role' property found", () => {
    expect(getEmployerRole('Matthew', employees)).toBe('Error: no role found for this employee');
  });
});
