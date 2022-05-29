// const { default: TestRunner } = require('jest-runner');
// const { isTypedArray } = require('util/types');
// const { describe } = require('yargs');
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

        it("should set name via constructor arugments", () => {
            // arrange
            const name = "Alice";
            // act
            const employee = new Employee(name);
            // assert
            expect(employee.name).toBe(name);
        });

        it("should set id via constructor arugments", () => {
            // arrange
            const id = 100;
            // act
            const employee = new Employee("Alice", id);
            // assert
            expect(employee.id).toBe(id);
        });

        it("should set email via constructor arugments", () => {
            // arrange
            const email = "test@test.com";
            // act
            const employee = new Employee("Alice", 100, email);
            // assert
            expect(employee.email).toBe(email);
        });
    });

        // get Name====================================
    describe("Getter methods", () => {
        it("should get name via getName()", () => {
            // arrange
            const name = "Alice";
            // act
            const employee = new Employee(name, 100, "test@test.com");
            const employeeName = employee.getName();
            // assert
            expect(employeeName).toBe(name);
        });


        // get ID =========================================
        it("should get id via getId()", () => {
            // arrange
            const id = 100;
            // act
            const employee = new Employee("Alice", id, "test@test.com");
            const employeeId = employee.getId();
            // assert
            expect(employeeId).toBe(id);
        });

    //  get Email =============================================
        it("should get email via getEmail()", () => {
            // arrange
            const email = "test@test.com";
            // act
            const employee = new Employee("Alice", 100, email);
            const employeeEmail = employee.getEmail();
            // assert
            expect(employeeEmail).toBe(email);
        });

        // get role ====================================
        it("should get role via getRole()", () => {
            // arrange
            const role = "Employee";
            // act
            const employee = new Employee("Alice", 100, "test@test.com");
            const employeeRole = employee.getRole();
            // assert
            expect(employeeRole).toBe(role);
        });
    });
});




