const Employee = require("../lib/Employee")

test("Employee's name is given", () => {
    const employee = new Employee("Charanvir", 1, 'charanvir123@gmail.com')

    expect(employee.name).toBe("Charanvir")
})

test("Employee's ID number is given", () => {
    const employee = new Employee("Charanvir", 1, 'charanvir123@gmail.com')

    expect(employee.Id).toEqual(1)
})

test("Employee's email is given", () => {
    const employee = new Employee("Charanvir", 1, "charanvir123@gmail.com")

    expect(employee.email).toBe("charanvir123@gmail.com")
})

test("get name of employee", () => {
    const employee = new Employee("Charanvir", 1, "charanvir123@gmail.com")

    expect(employee.getName()).toEqual(employee.name)
})

test("get ID of employee", () => {
    const employee = new Employee("Charanvir", 1, "charanvir123@gmail.com")

    expect(employee.getId()).toEqual(employee.Id)
})

test("get email of employee", () => {
    const employee = new Employee("Charanvir", 1, "charanvir123@gmail.com")

    expect(employee.getEmail()).toEqual(employee.email)
})

test("get all information of employee", () => {
    const employee = new Employee("Charanvir", 1, "charanvir123@gmail.com")

    expect(employee.getRole()).toEqual(expect.any(Object))
})