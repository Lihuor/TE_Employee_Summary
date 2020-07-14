// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, position, id, email, officeNumber) {
        super(name, position, id, email)
        this.officeNumber = officeNumber;
    }
    printInfo(){
        super.printInfo()
        console.log(`Office Number: ${this.officeNumber}`);
    }
};

module.exports = Manager;


// const manager = new Manager('Jared','Manager', 1, 'jared@fakeemail.com', '1');
// console.log(manager);