const fs = require("fs")

const makeFile = content => {
    fs.writeFile("./dist/index.html", content, err => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = makeFile