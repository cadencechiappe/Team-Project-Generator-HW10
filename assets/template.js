// create team function
const createTeam = team => {

    // manager html
    const generateManager = function(manager) {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3> Manager </h3>
            </div>
            <ul>
                <li>ID: ${manager.id}</li>
                <li>ON: ${manager.officeNumber}</li>
                <li>email: ${manager.email}</li>
            </ul>
        </div>
        `;
    };

    // engineer html
    const generateEngineer = function (engineer) {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3> Engineer </h3>
            </div>
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>github: ${engineer.github}</li>
                <li>email: ${engineer.email}</li>
            </ul>
        </div>
        `;
    };

    // intern html
    const generateIntern = function (intern) {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3> Intern </h3>
            </div>
            <ul>
                <li>ID: ${intern.id}</li>
                <li>School: ${intern.school}</li>
                <li>email: ${intern.email}</li>
            </ul>
        </div>
        `;
    };

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// export function with full HTML structure
const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
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
        ${employeeCards}
      </div>
    </body>
  </html>`
    ;
};
}

module.exports = createTeam;