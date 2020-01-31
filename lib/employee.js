//creating the main class employee
const inquirer = require("inquirer");
const engineer = require("./engineer");
const intern = require("./intern");
const manger = require("./manger");

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
       
        return newemp =new employee(empRole);
        
    }
}

const emp = new employee();


module.exports = employee;

