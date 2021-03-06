// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require ('./utils/generateMarkdown');

// inquirer prompt and run code
inquirer
    .prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your Employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
        {
            type: 'list',
            name: 'title',
            message: 'What is your job title?',
            choices: ["Manager", "Engineer", "Intern"]
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      });
  
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
  
//   // Bonus using writeFileSync as a promise
//   const init = () => {
//     promptUser()
//       // Use writeFileSync method to use promises instead of a callback function
//       .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
// };

// init();
  