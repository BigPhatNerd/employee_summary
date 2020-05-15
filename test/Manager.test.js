const Manager = require('../lib/Manager');

test("Can set officeNumber via constructor arguments", () => {
    const officeNumber = 901;
    var e = new Manager("Bob", 3, "bobo@bob.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test("expects getRole() to return 'Manager'", () => {

    var e = new Manager("Bob", 2, "yo@oy.com", 909);
    expect(e.getRole()).toBe("Manager");
});

test("expects getOfficeNumber() to return 987", () => {
    var num = 987;
    var e = new Manager("Bob", 4, "uo@jk.com", num);
    expect(e.getOfficeNumber()).toBe(num);
})