const Engineer = require("../lib/Engineer")

test("get Engineer data from Employee Class", () => {
    const engineer = new Engineer("Charanvir", 1, "charanvir123@gmail.com")

    expect(engineer.name).toBe("Charanvir")
    expect(engineer.Id).toBe(1)
    expect(engineer.email).toBe("charanvir123@gmail.com")
})

test("get Engineer's Github account", () => {
    const engineer = new Engineer("Charanvir", 1, "charanvir123@gmail.com", "Github.com/Charanvir")

    expect(engineer.github).toBe("Github.com/Charanvir")
})

test("get all of the engineers data", () => {
    const engineer = new Engineer("Charanvir", 1, "charanvir123@gmail.com", "Github.com/Charanvir")

    expect(engineer.getRole()).toHaveProperty("github")
})

test("get engineers github from getGitHub function", () => {
    const engineer = new Engineer("Charanvir", 1, "charanvir123@gmail.com", "Github.com/Charanvir")

    expect(engineer.getGithub()).toEqual(engineer.github)
})