// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project (required):",
        validate: answer => {
            if(!answer){
                return "Please enter a valid project title.";
            }

            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Write a project description (leave blank to omit section):"
    },
    {
        type: "input",
        name: "install",
        message: "Enter installation instructions (leave blank to omit section):"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information (leave blank to omit section):"
    },
    {
        type: "input",
        name: "contribution",
        message: "How to contribute to the project (leave blank to omit section):"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions (leave blank to omit section):"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a software license: ",
        choices: ["MIT License", "GNU GPLv3", "Apache License 2.0", "Mozilla Public License 2.0", "ISC License", "Boost Software License 1.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "credit",
        message: "Enter project contributers (leave blank to omit section):"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username (required):",
        validate: answer => {
            if(!answer){
                return "Please enter a valid GitHub username.";
            }

            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address (required):",
        validate: answer => {
            if(!answer){
                return "Please enter a valid email address.";
            }

            return true;
        }
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
