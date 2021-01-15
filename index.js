
// importing
const inquirer = require("inquirer")
const fs = require('fs');
const readme = "README.md";
const util = require("util");
const generateMarkdown = require('./util/genrateMarkdown');

// const {prompt} = readme


// array of questions for user
const questions = [ 
    {
        type: "input",
        message: "what is your project's title?",
        name: "Title"
    },
    
    {
        type: "input",
        message: "what would you like to put into the description or your README?",
        name: "Description"
    },

    {
        type: "input",
        message: "table of Contents",
        name: " Table of Contents"
    },

    {
        type: "input",
        message: " what are the steps required to install your README project?",
        name: "Installation"
    },

    {
        type: "input",
        message: " provide instruction for use",
        name: " Usage"

    },

    {
        type: "input",
        message: "Select lincense",
        name: "Lincense",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },

    {
        type: "input",
        message: " contributors?",
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
     prompt(question).then(answers => { 

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md" , response);
     })

 }

 // function call to initialize program
 init();