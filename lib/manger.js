const inquirer = require("inquirer");
const employee = require("./employee");
class manger extends employee {
    getGithub() {

        inquirer
            .prompt([{

                type: "input",
                name: "office",
                message: "Enter your office number: "
            }]).then(function (office) {

                return office;

                    })

            };
}

module.exports = manger;