// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, position, id, email, github) {
        super(name, position, id, email)
        this.github = github;
    }
    printInfo(){
        super.printInfo()
        console.log(`Github: ${this.github}`);
    }
};

module.exports = Engineer;
// const engineer = new Engineer ('Alec', 'Engineer', 1, 'alec@fakeemail.com', 'ibealec');
// engineer.printInfo();
// console.log(engineer);
