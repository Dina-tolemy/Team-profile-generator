//creating the main class employee
const inquirer = require("inquirer");
const engineer = require("./engineer");
const intern = require("./intern");
const manger = require("./manger");


inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name: "

        },
        {
            type: "input",
            name: "id",
            message: "Enter your Id: "

        },
        {
            type: "input",
            name: "email",
            message: "Enter your Email: "

        },
        {
            type: 'list',
            name: "role",
            message: "Enter your name: ",
            choices: ['Intern', 'Engineer', 'Manger']
        }

    ]).then(function ({ name, id, email, role }) {

        const name1 = name;
        const id1 = id;
        const email1 = email;
        const role1 = role;
        return name1, id1, email1, role1;
    })

class employee {
    constructor(empName, empId, empEmail, empRole) {

        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
        this.empRole = empRole;
    }

    getName() {
        empName = name1;
        return empName;

    }

    getId() {
        empId = id1;
        return empId;
    }
    getEmail() {
        empEmail = email1;
        return empEmail;
    }
    getrole() {
        empRole = role1;
        if (empRole=='Intern'){
          return  intern =new employee(empId,empName,empEmail,empRole);
        }
        else if(empRole=='engineer'){
          return   engineer= new employee(empId,empName,empEmail,empRole);
        }
        else if (empRole=='manger'){
          return  manger=new employee(empId,empName,empEmail,empRole);
        }
        
    }
}

const emp = new employee();


module.exports = employee;

