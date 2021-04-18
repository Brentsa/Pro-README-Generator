// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }

  return `https://img.shields.io/badge/<license>-<${license}>-<green>`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, install, usage, contribution, test, license}) =>{

  return `
  # ${title}
  ![badge](${renderLicenseLink(license)})

  ## Description 
  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  
  ## Installation
  ${install}

  ## Usage 
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contribution}

  ## Tests
  ${test}

  ## Credits

  `;
}

module.exports = generateMarkdown;
