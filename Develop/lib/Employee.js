// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, position, id, email) {
        this.name = name;
        this.position = position;
        this.id = id;
        this.email = email;
    }
    printInfo() {
        console.log(`${this.name}`);
        console.log(`${this.position}`)
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        console.log(`GitHub: ${this.github}`);
        
    }
}

// const employee = new Employee('Alec', 'Engineer', 1, 'alec@fakeemail.com', 'ibealec');

// employee.printInfo();

module.exports = Employee;