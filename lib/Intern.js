const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email)
        this.school = school
    }

    getRole() {
        return {
            name: this.name,
            Id: this.Id,
            email: this.email,
            school: this.school
        }
    }
}

module.exports = Intern