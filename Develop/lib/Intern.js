// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, position, id, email, school, ) {
        super(name, position, id, email)
        this.school = school;
    }
    printInfo(){
        super.printInfo()
        console.log(`School: ${this.school}`);
    }
}

module.exports = Intern;
// const intern = new Intern ('John', 'Intern', 2, 'john@fakeemail.com', '2University');
// console.log(intern);