const makeFile = require("./makeFile")

generateHTML = data => {
    const manager = data.filter(obj => {
        return obj.officeNumber
    })
    const engineer = data.filter(obj => {
        return obj.github
    })
    const intern = data.filter(obj => {
        return obj.school
    })

    const managerData = manager.map(({ name, Id, email, officeNumber }) => {
        return `
        <div class="col-4 mx-auto my-2 cardSection">
            <div class="card mx-auto" style="width: 80%;">
                <div class=" card-body">
                    <h3 class="card-title text-center">${name}</h3>
                    <h4 class="text-center card-subtitle mb-2 text-muted">Team Manager</h4>
                    <p class="card-text col-12">ID: ${Id}</p>
                    <address>
                        Email: <a href="${email}">${email}</a>
                    </address>
                    <p class="card-text col-12">Office Number: ${officeNumber}</p>
                </div>
            </div>
        </div>
        `
    })
    const engineerData = engineer.map(({ name, Id, email, github }) => {
        return `
        <div class="col-4 cardSection">
                    <div class="card mx-auto" style="width: 80%;">
                        <div class=" card-body">
                            <h3 class="card-title text-center">${name}</h3>
                            <h4 class="text-center card-subtitle mb-2 text-muted">Engineer</h4>
                            <p class="card-text col-12">ID: ${Id}</p>
                            <address>
                                Email: <a href="mailto:${email}">${email}</a>
                            </address>
                            Github: <a href="https://Github.com/${github}">https://Github.com/${github}</a>
                        </div>
                    </div>
                </div>`
    })

    const internData = intern.map(({ name, Id, email, school }) => {
        return `
        <div class="col-4 cardSection">
        <div class="card mx-auto" style="width: 80%;">
            <div class=" card-body">
                <h3 class="card-title text-center">${name}</h3>
                <h4 class="text-center card-subtitle mb-2 text-muted">Intern</h4>
                <p class="card-text col-12">ID: ${Id}</p>
                <address>
                    Email: <a href="mailto:${email}">${email}</a>
                </address>
                <p>School: ${school}</p>
            </div>
        </div>
    </div>`
    })

    makeHTML(managerData, engineerData, internData)
}

makeHTML = function (managerData, engineerData, internData) {
    makeFile(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <div class="bg-danger">
            <h1>My Team</h1>
        </div>
    </header>

    <section>
        ${managerData}
        <div class="container">
            <div class="row">
                ${engineerData.join('')}
                ${internData.join('')}
            </div>
        </div>
    </section>






    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>
</body>

</html>
    
    
    
    
    `)
}



module.exports = generateHTML