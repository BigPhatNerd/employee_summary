const Engineer = require("../lib/Engineer");

test("Can set github email address via constructor arguments", () => {
    var github = "bigphatnerd@github.com";
    var e = new Engineer("Wilson", 4, "wilson@gmail.com", github);
    expect(e.github).toBe(github);
});

test("Expects getRole() to return 'Engineer'", () => {
    var e = new Engineer("Mike", 3, "mike@mike.com", "mike@github.com");
    var role = "Engineer";
    expect(e.getRole()).toBe(role);
});

test("Expects getGithub() to return github address", () => {
    var github = "mike@github.com";
    var e = new Engineer("Mike", 2, "mike@mike.com", github);
    expect(e.getGithub()).toBe(github);
})