// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
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
        message: "Write a project description:"
    },
    {
        type: "input",
        name: "install",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:"
    },
    {
        type: "input",
        name: "contribution",
        message: "How to contribute to the project:"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions:"
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
        message: "Enter project contributers:"
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

// File name and path it will be created in
var file = "./generated/README.md";

// Custom promise function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) =>{
        fs.writeFile(fileName, data, error =>{
            if(error){
                reject(error);
                return;
            }

            resolve({
                ok:true, 
                message:"\nFile written!"
            });
        });
    });
}

// initialize the app by chaining promises
function init() {
    inquirer
        .prompt(questions)
        .then(answers => generateMarkdown(answers))
        .then(markdown => writeToFile(file, markdown))
        .then(response => console.log(response.message))
        .catch(err => console.log(err));
}

// Function call to initialize app
console.log("\n Welcome to Pro-README-Generator!");
console.log(" Answer questions as required to generate a professional README document.");
console.log(" You may submit non-required questions blank to omit the section.");
console.log(" The README.md file will be available in the 'generated' folder following the completion of the questionnaire.");
console.log(" Pro-Tip: Enter <br/> for a line break in the markup \n");
init();
