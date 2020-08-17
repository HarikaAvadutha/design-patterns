/*
The Decorator pattern extends (decorates) an object’s behavior dynamically.
The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object.
*/

class Employee {
    constructor(name) {
        this.name = name;
        this.say = function () {
            console.log("Employee: " + this.name);
        };
    }
}

class DecoratedEmployee {
    constructor(employee, street, city) {
        this.employee = employee;
        this.name = employee.name; // ensures interface stays the same
        this.street = street;
        this.city = city;
        this.say = function () {
            console.log("Decorated Employee: " + this.name + ", " +
                this.street + ", " + this.city);
        };
    }
}

let employee = new Employee("Harry");
employee.say();

let decoratedEmployee = new DecoratedEmployee(employee, "Padmaraonagar", "Hyderabad");
decoratedEmployee.say();
