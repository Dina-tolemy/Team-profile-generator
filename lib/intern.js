const inquirer = require("inquirer");
const employee = require("./employee");

class intern extends employee {
    getGithub() {

        inquirer
            .prompt([{

                type: "input",
                name: "School",
                message: "Enter your School name: "
            }]).then(function (School) {

                return School;

                    })

            };
}
module.exports = intern;