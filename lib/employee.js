//creating the main class employee

const inquirer = require("inquirer");


class employee {
    getEmployeeInfo() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter your name: "

                },
                {
                    type: "input",
                    name: "Id",
                    message: "Enter your Id: "

                },
                {
                    type: 'list',
                    name: "role",
                    message: "Enter your name: ",
                    choices: ['Intern', 'Engineer', 'Manger']
                }

            ])
            .then(function getName(name) {
                return name;
            })
            .then(function getId(id) {
                return id;
            })
            .then(function getRole(role) {
                return role = new employee();
            })
    }
}


const newEmployee = new employee();
newEmployee.getEmployeeInfo();

module.exports = employee;

