const Intern = require("../lib/Intern")

test("get intern data using employee class", () => {
    const intern = new Intern("Charanvir", 1, 'charanvir123@gmail.com')

    expect(intern.name).toBe("Charanvir")
    expect(intern.Id).toBe(1)
    expect(intern.email).toBe("charanvir123@gmail.com")
})

test("get interns school name", () => {
    const intern = new Intern("Charanvir", 1, 'charanvir123@gmail.com', "McMaster")


    expect(intern.school).toBe("McMaster")
})

test("get all intern information, with new getRole function", () => {
    const intern = new Intern("Charanvir", 1, 'charanvir123@gmail.com', "McMaster")

    expect(intern.getRole()).toHaveProperty("school")
})