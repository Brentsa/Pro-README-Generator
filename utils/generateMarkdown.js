//Global array used to create a dynamic table of contents
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

  return`## License\n${license}`;
}

// Returns string for description section
function renderDescriptionSection(description){
  if(!description){
    return'';
  }

  return`## Description\n${description}`;
}

// Returns string for installation section
function renderInstallationSection(install){
  if(!install){
    return'';
  }

  return`## Installation\n${install}`;
}

// Returns string for usage section
function renderUsageSection(usage){
  if(!usage){
    return'';
  }

  return`## Usage\n${usage}`;
}

// Returns string for contribution section
function renderContributingSection(contribution){
  if(!contribution){
    return'';
  }

  return`## Contributing\n${contribution}`;
}

// Returns string for test section
function renderTestSection(test){
  if(!test){
    return'';
  }

  return`## Tests\n${test}`;
}

// Returns string for the questions/contact section
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

  return`## Credits\n${credit}`;
}

// Loads the required sections for the table of contents to the global array
function loadTableOfContents(install, usage, contribution, test, license, credit){
  if(install){tableOfContents.push("Installation");}
  if(usage){tableOfContents.push("Usage");}
  if(license){tableOfContents.push("License");}
  if(contribution){tableOfContents.push("Contributing");}
  if(test){tableOfContents.push("Tests");}
  tableOfContents.push("Questions");
  if(credit){tableOfContents.push("Credits");}
}

// Returns the global array of table of content as a string for rendering
function createTableOfContents(){
  var returnList = [];

  for(var i = 0; i < tableOfContents.length; i++){
    returnList.push(`* [${tableOfContents[i]}](#${tableOfContents[i]})`)
  }

  return returnList.join("\n");
}

// Render the full table of conents section
function renderTableOfContents(){

  return`## Table of Contents

${createTableOfContents()}`;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, install, usage, contribution, test, license, credit, github, email}) =>{

  //Load the table of contents array so that when we go to render it, it will know what sections the user requires
  loadTableOfContents(install, usage, contribution, test, license, credit);

  //Initialize a temporary array to create our markdown
  var markdownArray = [];

  //If sections have content then we push them into the markdown array
  markdownArray.push(`# ${title}`);
  if(description){markdownArray.push(renderDescriptionSection(description));}
  markdownArray.push(renderTableOfContents());
  if(install){markdownArray.push(renderInstallationSection(install));}
  if(usage){markdownArray.push(renderUsageSection(usage));}
  if(license){markdownArray.push(renderLicenseSection(license));}
  if(contribution){markdownArray.push(renderContributingSection(contribution));}
  if(test){markdownArray.push(renderTestSection(test));}
  markdownArray.push(renderQuestionsSection(email,github));
  if(credit){markdownArray.push(renderCreditSection(credit));}

  //Return the array of conent sections as a string
  return markdownArray.join("\n\n");
}

module.exports = generateMarkdown;