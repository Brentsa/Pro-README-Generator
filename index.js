// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Describe the name of your project: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter a project description: "
    },
    {
        type: "input",
        name: "install",
        message: "Enter installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information: "
    },
    {
        type: "input",
        name: "contribution",
        message: "How to contribute to the project: "
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions: "
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license: ",
        choices: ["MIT License", "GNU GPLv3", "Apache License 2.0", "Mozilla Public License 2.0", "ISC License", "Boost Software License 1.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "credit",
        message: "Enter project contributers: "
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address: "
    }
];

var file = "./generated/README.md";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) =>{
        fs.writeFile(fileName, data, error =>{
            if(error){
                reject(error);
                return;
            }

            resolve({
                ok:true, 
                message:"File written!"
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => generateMarkdown(answers))
        .then(markdown => writeToFile(file, markdown))
        .then(response => console.log(response.message))
        .catch(err => console.log(err));
}

// Function call to initialize app
init();
