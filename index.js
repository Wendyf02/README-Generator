const inquirer = require("inquirer")
const fs = require('fs');
const util = require("util");


// const generateMarkdown = require("./util/generateMarkdown.js");

inquirer.prompt([ 
    {
        type: "input",
        message: "what is the title of your README project ?",
        name: "Title"
    },
    
    {
        type: "input",
        message: "table of Contents",
        name: " Table of Contents"
    },

    {
        type: "input",
        message: "what would you like to put into the description or your README?",
        name: "Description"
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
        message:" Contact info for further questions",
        name: "Questions"
    },

    {
        type: "input",
        message: " your  Github Username",
        name: "Username"
    },

    {
        type: "input",
        message: "what is yoyr email?",
        name: "Email"


    },

])