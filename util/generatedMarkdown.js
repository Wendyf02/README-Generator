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
  ${data.Lincense}
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





    












