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
        return name1, id1, email1, role1;
    })

const e = employee(name1, id1, email1, role1);

if (e.role1 == 'engineer') {
    const eng = new engineer();
    const enggithub = eng.getGithub();
    $("#engineerName").text(e.name1);
    $("#engineerId").text(e.id1);
    $("#engineerGitHub").text(enggithub);
}
else if (e.role1 == 'intern') {
    const newIntern = new intern();
    const internSchool = newIntern.getSchool();
    $("#internId").text(e.id1);
    $("#internName").text(e.name1);
    $("internSchool").text(internSchool);

}

else if (e.role1 == 'manger') {

    const newManger = new manger();
    const mangerOffice = newManger.getOfficeNum();
    $("#mangerName").text(e.name1);
    $("#mangerId").text(e.id1);
    $("#mangerOffice").text(mangerOffice);
}





