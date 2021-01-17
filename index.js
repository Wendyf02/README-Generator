
// importing
const inquirer = require("inquirer")
const fs = require('fs');
const readme = "README.md";
const util = require("util");
const generateMarkdown = require('./util/generatedMarkdown');


// array of questions for user
const questions = [ 
    {
        type: "input",
        message: "what is your project title?",
        name: "Title"
    },
    
    {
        type: "input",
        message: "what is a good description of your project?",
        name: "Description"
    },

    {
        type: "input",
        message: "what are the steps required to install your application?",
        name: "Installation"
    },

    {
        type: "input",
        message: "How do you use your application?",
        name: "Usage"

    },

    {
        type: "list",
        message: "What license did you use for this application? please select",
        name: "License",
        choices: [
            "MIT",
            "GNU 2.0",
            "GNU 3.0",
            "APACHE 2.0",
            "None"
        ]
    },

    {
        type: "input",
        message: "Who contributed to this projects?",
        name: "Contributors"
    },
     
    {
        type: "input",
        message: "How do you test your project?",
        name: "Test"
    },

    {
        type: "input",
        message:" Contact info for further questions",
        name: "Questions"
    },

    {
        type: "input",
        message: " what is your  Github Username",
        name: "Username"
    },

    {
        type: "input",
        message: "what is your email?",
        name: "Email"


    },

];

// function to write file
function writeToFile(fileName , data) {
   fs.writeFile(fileName, data, err => { 
      if (err) {
          throw err;
      }
   });
}

// function to initialize program 
 function init()  {
    inquirer.prompt(questions).then(answers => { 

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md" , response);
     })

 }

 // function call to initialize program
 init();