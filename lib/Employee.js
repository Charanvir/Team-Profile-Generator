class Employee {
    constructor(name, Id, email) {
        this.name = name
        this.Id = Id
        this.email = email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.Id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return {
            name: this.name,
            Id: this.Id,
            email: this.email
        }
    }
}

module.exports = Employee