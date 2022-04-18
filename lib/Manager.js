const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, Id, email, officeNumber) {
        super(name, Id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return {
            name: this.name,
            Id: this.Id,
            email: this.email,
            officeNumber: this.officeNumber
        }
    }
}

module.exports = Manager