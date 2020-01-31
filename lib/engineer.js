const inquirer = require("inquirer");
const employee = require("./employee");
const axios = require("axios");

class engineer extends employee {
    getGithub() {

        inquirer
            .prompt([{

                type: "input",
                name: "engName",
                message: "Enter your Github user name: "
            }]).then(function (engName) {

                const queryUrl = `https://api.github.com/users/${engName}`;
                axios.get(queryUrl)
                    .then(function (res) {
                        const userGitHub = res.data.html_url;
                        return userGitHub;

                    })

            });
    }

    getrole() {
        this.empRole = "Engineer"
    }
}



module.exports = engineer;