const Manager = require("../lib/Manager")

test("retrieve Manager information from Employee class", () => {
    const manager = new Manager("Charanvir", 1, "charanvir123@gmail.com", 1)

    expect(manager.name).toBe("Charanvir")
    expect(manager.Id).toBe(1)
    expect(manager.email).toBe("charanvir123@gmail.com")
})

test("get managers office number", () => {
    const manager = new Manager("Charanvir", 1, "charanvir123@gmail.com", 1)

    expect(manager.officeNumber).toBe(1)
})

test("get information on all team manager data", () => {
    const manager = new Manager("Charanvir", 1, "charanvir123@gmail.com", 1)

    expect(manager.getRole()).toHaveProperty("officeNumber")
})