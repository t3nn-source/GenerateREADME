// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import {writeFile} from "fs/promises";
import generateMarkdown from "./generateMarkdown.js";
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type : 'input',
        message : 'What is the title of the README file?',
        name: 'title',
    },
    {
        type : 'input',
        message : 'List a description for the project.',
        name: 'description',
    },
    {
        type : 'input',
        message : 'List the installation instructions for the project.',
        name: 'installation',
    },
    {
        type : 'input',
        message : 'List instructions on how to use the application.',
        name: 'usage',
    },
    {
        type : 'input',
        message : 'List guidelines for contributing to the project.',
        name: 'contributing',
    },
    {
        type : 'input',
        message : 'List instructions for testing the application.',
        name: 'tests',
    },   {
        type : 'list',
        message : 'Choose a license from the list below.',
        name: 'license',
        choices : ['MIT', 'GPLv3', 'Apache', 'BSD', 'None']
    },
    {
        type: 'input',
        message: 'Enter your GitHub Username',
        name: 'github',
        
      },
      {
        type: 'input',
        message: 'Enter your Email Address',
        name: 'email',
      },
]);
};
// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers)=> writeFile('./README.md', generateMarkdown(answers)))    
    
};

// Function call to initialize app
init();
