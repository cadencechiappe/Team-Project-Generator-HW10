// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');
// const generateMarkdown = require ('./utils/generateMarkdown');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// ouptut require const
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js");

teamArray = [];

// first run of application, sends user to proper specific function depending on job title
function runApp () {
    function createTeam () {
        inquirer
            .prompt([
        {
            type: "list",
            name: "title",
            message: "Type of employee you are adding to your team?",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ])
    .then(function(userInput) {
        switch(userInput.title) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                htmlBuilder();
        }

      });
    }
}

// manager inquirer prompt
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is their name?',
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is their Employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?',
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.EmployeeName, answers.employeeID, answers.email, answers.officeNumber);
            teamArray.push(manager);
            createTeam();
        });
}

// engineer inquirer prompt
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is their name?',
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is their Employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?',
            },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.EmployeeName, answers.employeeID, answers.email, answers.officeNumber);
            teamArray.push(engineer);
            createTeam();
        });
}

// intern inquirer prompt
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is their name?',
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is their Employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?',
            },
        ])
        .then(answers => {
            const intern = new Intern(answers.EmployeeName, answers.employeeID, answers.email, answers.officeNumber);
            teamArray.push(intern);
            createTeam();
        });
}

function htmlBuilder () {
    console.log("successfully created team")
    fs.writeFileSync (outputPath, generateTeam(teamArray), "UTF=8")
}

createTeam ();

runApp();

// // inquirer prompt and run code
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'employeeName',
//             message: 'What is your name?',
//         },
//         {
//             type: 'input',
//             name: 'employeeID',
//             message: 'What is your Employee ID?',
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email address?',
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'What is your office number?',
//         },
//     ])
//     .then((answers) => {
//         const htmlPageContent = generateHTML(answers);
    
//         fs.writeFile('index.html', htmlPageContent, (err) =>
//           err ? console.log(err) : console.log('Successfully created index.html!')
//         );
//       });
  
const generateHTML = ({ employeeName, employeeID, email, officeNumber, title }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="./styles.css">
      <title>My Team</title>
    </head>
    <header>
      <h1>My Team</h1>
    </header>
    <body>
      <div class="card-container">
          <div class="card">
              <div class="card-header">
                  <h2>${employeeName}</h2>
                  <h3>${title}</h3>
              </div>
              <ul>
                  <li>ID: ${employeeID}</li>
                  <li>ON: ${officeNumber}</li>
                  <li>email: ${email}</li>
              </ul>
          </div>
      </div>
  
    </body>
  </html>`;
  
// //   // Bonus using writeFileSync as a promise
// //   const init = () => {
// //     promptUser()
// //       // Use writeFileSync method to use promises instead of a callback function
// //       .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
// //       .then(() => console.log('Successfully wrote to index.html'))
// //       .catch((err) => console.error(err));
// // };

// // init();
  