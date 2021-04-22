// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }

  return `![badge](${renderLicenseLink(license)})`;
}

// Returns the license link
function renderLicenseLink(license) {
  if(!license){
    return '';
  }

  return (`https://img.shields.io/badge/license-${license}-green`).split(" ").join("%20");
}

// Returns the license section of README
function renderLicenseSection(license) {
  if(!license){
    return '';
  }

  return`
  ## License
  ${license}`;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, install, usage, contribution, test, license, credit, github, email}) =>{

  return `
  # ${title}
  ${renderLicenseBadge(license)}

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

  ${renderLicenseSection(license)}

  ## Contributing
  ${contribution}

  ## Tests
  ${test}

  ## Questions
  You can reach me via:
  * Email: ${email}
  * GitHub: ${github}

  ## Credits
  ${credit}
  `;
}

module.exports = generateMarkdown;
