const inquirer = require("inquirer");
const employee = require("./employee");

class manger extends employee {

    constructor()
    getOfficeNum() {

        inquirer
            .prompt([{

                type: "input",
                name: "office",
                message: "Enter your office number: "
            }]).then(function (office) {

                return office;

            })

    }

    getrole() {
        this.empRole = "Manger"
    }

}

module.exports = manger;