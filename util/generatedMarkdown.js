const { report } = require("process")

// function to generateMarkdown for README
function generateMarkdown(data) { 
   return '

  # ${data.Title} 

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Test](#test)
  *[Questions](#questions)
  ##Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Lincense
  ${data.Contributors}
  ## Test
  ${data.Test}
  ## Questions
  Contact me:
  Github:[${data.Username}](https://github.com/Wendyf02)
  Email:[${data.Email}](https://github.com/Wendyf02)

';}


# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Test](#test)
*[Questions](#questions)
# Installation

The following necessary dependencies must be installed to run the application
# UsageIn order to use this app , ${data.Usage}

# Lincense
This  project is lincensed under the ${data.License} lincense.Usage

#Contributing
Contributors: ${data.Contributors}

#Tests
The following is needed to run the tests: ${data.Tests}

#Questions
If you have any questions about the report, open an issue or contact ${data.Username}



    












