const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "github";
    const employeeInstance = new Engineer("Name", 2, "email", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "github";
    const employeeInstance = new Engineer("Name", 2, "email", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Name", 2, "email", "github");
    expect(employeeInstance.getRole()).toBe(returnValue);
});