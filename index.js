// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

// inquirer prompt and run code
const promptUser = () => {
return inquirer.prompt([
    {
        type: 'name',
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
    ]);
};
  
const generateHTML = ({ name, location, github, linkedin }) =>
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="">
    <title>Document</title>
  </head>
  <body>
  </body>
  </html>`;
  
  // Bonus using writeFileSync as a promise
  const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
};

init();
  