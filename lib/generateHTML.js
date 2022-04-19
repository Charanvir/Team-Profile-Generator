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
    makeManagerSection(manager)
    makeEngineerSection(engineer)
    makeInternSection(intern)
}




module.exports = generateHTML