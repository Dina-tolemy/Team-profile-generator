const inquirer = require("inquirer");
const employee = require("./employee");

class intern extends employee {
    getSchool() {

        inquirer
            .prompt([{

                type: "input",
                name: "School",
                message: "Enter your School name: "
            }]).then(function (School) {

                return School;

                    })

            };

            getrole(){
                this.empRole="Intern"
            }
}
module.exports = intern;