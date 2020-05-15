const Intern = require("../lib/Intern");

test("Can set school via constructor functions", () => {
    var school = "MSU";
    var e = new Intern("Mike", 5, "mike@mike.com", school);
    expect(e.school).toBe(school);
});

test("Running getRole() should return 'intern'", () => {
    var e = new Intern("Mike", 5, "mike@mike.com", "MSU");
    expect(e.getRole()).toBe("Intern");
});

test("Running getSchool() should return 'MSU'", () => {
    var e = new Intern("Mike", 3, "mike@mike.com", "MSU");
    expect(e.getSchool()).toBe("MSU");
})