// const { default: TestRunner } = require('jest-runner');
// const { isTypedArray } = require('util/types');
// const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("initialization", () => {
        it("should instantiate an employee instance", () => {
            // Arrange
            const employee = new Employee();


            // act 


            // Assert
            expect(typeof employee).toBe("object");
        });
    });
});




