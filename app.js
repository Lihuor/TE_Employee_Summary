const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");

const employeeTeam = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createManager() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is manager's name?",
        },
        {
          name: "id",
          type: "input",
          message: "What is manager's ID number?",
        },
        {
          name: "email",
          type: "input",
          message: "What is manager's email?",
        },
        {
          name: "number",
          type: "input",
          message: "What is the manager's office number?",
        },
      ])
      .then(function (result) {
        console.log(result);
        const newManager = new Manager(
          result.name,
          result.id,
          result.email,
          result.number
        );
        employeeTeam.push(newManager);
        createTeam();
      });
  }
  createManager();
  
  function createTeam() {
    inquirer
      .prompt([
        {
          name: "addMember",
          type: "list",
          message: "Would you like to add a team member?",
          choices: [
            "Yes, add a Manager",
            "Yes, add an Engineer",
            "Yes, add an Intern",
            "No my team is complete",
          ],
        },
      ])
      .then(function (data) {
        switch (data.addMember) {
          case "Yes, add a Manager":
            createManager();
            break;
          case "Yes, add an Engineer":
            createEngineer();
            break;
          case "Yes, add an Intern":
            createIntern();
            break;
          case "No my team is complete":
            buildTeam();
            break;
        }
      });
  }
  
  function createEngineer() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is engineer's name?",
        },
        {
          name: "id",
          type: "input",
          message: "What is engineer's ID number?",
        },
        {
          name: "email",
          type: "input",
          message: "What is engineer's email?",
        },
        {
          name: "github",
          type: "input",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then(function (result) {
        const newEngineer = new Engineer(
          result.name,
          result.id,
          result.email,
          result.github
        );
        employeeTeam.push(newEngineer);
        createTeam();
      });
  }
  
  function createIntern() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is intern's name?",
        },
        {
          name: "id",
          type: "input",
          message: "What is intern's ID number?",
        },
        {
          name: "email",
          type: "input",
          message: "What is intern's email?",
        },
        {
          name: "school",
          type: "input",
          message: "What school did the intern attend?",
        },
      ])
      .then(function (result) {
        const newIntern = new Intern(
          result.name,
          result.id,
          result.email,
          result.school
        );
        employeeTeam.push(newIntern);
        createTeam();
      });
  }
    
  function buildTeam() {
    fs.writeFileSync(outputPath, render(employeeTeam), "utf8");
  }
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
