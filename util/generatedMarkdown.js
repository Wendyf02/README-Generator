//function to generate markdown for README
function licenseBadge(data) {
   const licenseType = data.license[0];
   let licensestring = " "
   if(licenseType === "MIT") {
      licenseString =`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
   };
    
  if (licenseType === "GNU General Public License 2.0") {
      licenseString = `![[License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };

  if (licenseType === "Apache License 2.0") { 
      licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  
  };

  if (licenseType === "GNU General Public License 3.0") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`

  };
  return licenseString

};


const { report } = require("process")

// function to generatedMarkdown for README
function generatedMarkdown(data) { 
   return ` # ${data.Title} 
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Lincense
  ${licenseBadge(data)}

  ## Contributors
  ${data.Contributors}

  ## Test
  ${data.Test}
  
  ## Questions

  Contact me:   
  Github: https://github.com/${data.Username}   
  Email: ${data.Email}
`;}

module.exports = generatedMarkdown





    












