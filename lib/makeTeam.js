const inquirer = require("inquirer")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")
const generateHTML = require("./generateHTML")


function makeTeam() {
    this.manager;
    this.engineer;
    this.intern;
    this.allEmployees = []
}

makeTeam.prototype.startBuilding = function () {
    return inquirer
        .prompt([
            {
                type: "input",
                name: 'name',
                message: 'What is the team managers name? '
            }, {
                type: 'input',
                name: 'Id',
                message: 'What is the team managers Id number? '
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team managers email? '
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team managers office number? '
            }
        ])
        .then(({ name, Id, email, officeNumber }) => {
            this.manager = new Manager(name, Id, email, officeNumber)
            let teamManager = this.manager.getRole()
            this.allEmployees.push(teamManager)

            this.nextEmployee()
        })
}

makeTeam.prototype.nextEmployee = function () {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'type',
                message: 'Select employee type for next input ',
                choices: ['Intern', 'Engineer',]
            }
        ])
        .then(({ type }) => {
            if (type === 'Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is the interns name? "
                        },
                        {
                            type: 'input',
                            name: 'Id',
                            message: 'What is the interns Id number? '
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is the interns email? '
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What school did this intern attend? '
                        },
                        {
                            type: 'list',
                            name: 'action',
                            message: 'Would you like to enter another employee or finish making the team? ',
                            choices: ["Add Another", "Finish"]
                        }
                    ])
                    .then(({ name, Id, email, school, action }) => {
                        this.intern = new Intern(name, Id, email, school)
                        let newIntern = this.intern.getRole()
                        this.allEmployees.push(newIntern)
                        if (action === "Add Another") {
                            this.nextEmployee()
                        } else {
                            this.finishTeam()
                        }
                    })
            } else {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'What is the name of the engineer? '
                        },
                        {
                            type: 'input',
                            name: 'Id',
                            message: 'What is the Id of the engineer? '
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is the engineers email? '
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'What is the engineers Github username? '
                        },
                        {
                            type: 'list',
                            name: 'action',
                            message: 'Would you like to enter another employee or finish making the team? ',
                            choices: ["Add Another", "Finish"]
                        }
                    ])
                    .then(({ name, Id, email, github, action }) => {
                        this.engineer = new Engineer(name, Id, email, github)
                        let newEngineer = this.engineer.getRole()
                        this.allEmployees.push(newEngineer)
                        if (action === "Add Another") {
                            this.nextEmployee()
                        } else {
                            this.finishTeam()
                        }
                    })
            }
        })
}

makeTeam.prototype.finishTeam = function () {
    let data = this.allEmployees;
    generateHTML(data)
}







module.exports = makeTeam
