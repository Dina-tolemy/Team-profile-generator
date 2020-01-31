const inquirer = require("inquirer");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manger = require("./lib/manger");

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
        if (role1=='Intern'){
            intern =new employee(name1,id1,email1,role1);
        }
        else if(role1=='engineer'){
            engineer= new employee(name1,id1,email1,role1);
        }
        else if (role1=='manger'){
            manger=new employee(name1,id1,email1,role1);
        }
        Console.log(name1, id1, email1, role1);
        return name1, id1, email1, role1;
    })
