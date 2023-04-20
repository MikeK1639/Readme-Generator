// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null){
    license ="";
  } else {
    return `![license: ${license}](https://img.shields.io/badge/license-${license}-blue)`
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license === null){
  license ="";
} else {
  return `[License](#license)`
}}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (license === null){
  license ="";
} else {
  return `## License`
}}

// Create a function to generate markdown for README
function generateMarkdown({Title,Description,Installation,Usage,Contribution,Test,Credits,license,Username,Email}) {
  return `# ${Title}
  ${renderLicenseBadge(license)}
  ## Description
  
  ${Description}
  
  ## Table of Contents 
  
  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits) 
  - [Contribution](#contribution)
  - ${renderLicenseLink(license)} 
  - [Test](#test)
  - [Questions](#questions)
  
  ## Installation
  
  ${Installation}
  
  ## Usage
  
  ${Usage}

  ## Credits
  
 ${Credits}
  
  ${renderLicenseSection(license)}
  
 ${license}
  
  ## How to Contribute
  
  ${Contribution}
  
  ## Tests

  ${Test}

  ## Questions 
github: ${Username} 

email: ${Email}
  
`
}

module.exports = generateMarkdown;
