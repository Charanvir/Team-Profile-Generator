const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, Id, email, github) {
        super(name, Id, email)
        this.github = github
    }

    getGithub(github) {
        return this.github = github
    }

    getRole() {
        return {
            name: this.name,
            Id: this.Id,
            email: this.email,
            github: this.github
        }
    }
}

module.exports = Engineer