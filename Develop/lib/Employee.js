// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
}

// const employee = new Employee('Alec', 1, 'alec@fakeemail.com', 'ibealec');
// console.log(employee);

// employee.printInfo();

module.exports = Employee;