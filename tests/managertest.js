const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Name", 2, "email", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Name", 2, "email", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Name", 2, "email", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});