const Employee = require('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const name = "Alice";
    const id = 3;
    const e = new Employee(name, id);
    expect(e.id).toBe(id);
});

test("Can set email via constructor argument", () => {
    const email = "test@test.com";
    const e = new Employee("Mike", 3, email);
    expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
    const name = "Mike";
    const e = new Employee(name, 4, "test@test.com");
    expect(e.getName()).toBe(name);
});

test("Can get id via getId()", () => {
    const id = 3;
    const e = new Employee("Mike", id, "test@test.com");
    expect(e.getId()).toBe(id);
});

test("Can get email via getEmail()", () => {
    const email = "test@test.com";
    const e = new Employee("Mike", 2, email);
    expect(e.getEmail()).toBe(email);
})






//