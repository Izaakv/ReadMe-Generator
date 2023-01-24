//Set up package dependency installation 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js') 

// Created an array of questions for user input
const questions = [
{   
    // input for title of project
    type: 'input',
    name: 'title',
    message: 'Project title?',
},
{   
    // inputs for readme section
    type: 'input',
    name: 'description',
    message: 'Please write a detailed description of you project.',

},
{
    type: 'input',
    name: 'installation',
    message: 'Are there any required packages that need to be installed? If so, what are the steps?',
    
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the use for this project?',
    
},
{
    type: 'input',
    name: 'credits',
    message: 'Please list contributions if any that were made to this project.',
    
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose the appropriate license for your project.',
    choices: ['mit', 'isc', 'gpl-3.0', 'apache-2.0'],
    
},
{
    type: 'input',
    name: 'questions',
    message: 'What is the link to your GitHub profile?',
    
},
{
    type: 'input',
    name: 'github',
    message: 'What is your username on GitHub?',
    
},
{
    type: 'input',
    name: 'email',
    message: 'What is your registered email address?',
    
},

];


//Created a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) => {
        console.log(err)
})

};

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log(responses)
        const readMe = generateMarkdown(responses)
        writeToFile('README.md', readMe)
        console.log("README generated")
 
    });

};


init();