var tableOfContents = [];

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
    return'';
  }

  return`## License
${license}`;
}

// Returns string for description section
function renderDescriptionSection(description){
  if(!description){
    return'';
  }

  return`## Description 
${description}`;
}

// Returns string for installation section
function renderInstallationSection(install){
  if(!install){
    return'';
  }

  return`## Installation
${install}`;
}

// Returns string for usage section
function renderUsageSection(usage){
  if(!usage){
    return'';
  }

  return`## Usage
${usage}`;
}

// Returns string for contribution section
function renderContributingSection(contribution){
  if(!contribution){
    return'';
  }

  return`## Contributing
${contribution}`;
}

// Returns string for test section
function renderTestSection(test){
  if(!test){
    return'';
  }

  return`## Tests
${test}`;
}

function renderQuestionsSection(email, github){

  return `## Questions
You can reach me via:
* Email: ${email}
* GitHub: [${github}](https://github.com/${github})`;
}

// Returns string for credit section
function renderCreditSection(credit){
  if(!credit){
    return'';
  }

  return`## Credits
${credit}`;
}

function loadTableOfContents(install, usage, contribution, test, license, credit){
  if(install){tableOfContents.push("Installation");}
  if(usage){tableOfContents.push("Usage");}
  if(license){tableOfContents.push("License");}
  if(contribution){tableOfContents.push("Contributing");}
  if(test){tableOfContents.push("Tests");}
  tableOfContents.push("Questions");
  if(credit){tableOfContents.push("Credits");}
}

function createTableOfContents(){
  var returnList = [];

  for(var i = 0; i < tableOfContents.length; i++){
    returnList.push(`* [${tableOfContents[i]}](#${tableOfContents[i]})`)
  }

  return returnList.join("\n");
}

function renderTableOfContents(){

  return`## Table of Contents

${createTableOfContents()}`;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, install, usage, contribution, test, license, credit, github, email}) =>{

  loadTableOfContents(install, usage, contribution, test, license, credit);

  return `
# ${title}
${renderLicenseBadge(license)}

${renderDescriptionSection(description)}

${renderTableOfContents()}

${renderInstallationSection(install)}

${renderUsageSection(usage)}

${renderLicenseSection(license)}

${renderContributingSection(contribution)}

${renderTestSection(test)}

${renderQuestionsSection(email,github)}

${renderCreditSection(credit)}`;
}

module.exports = generateMarkdown;

