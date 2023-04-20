const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [ 
   
{type:"input", 
name:"Title", 
message:"What is your projects title?"},

{type:"input", 
name:"Description", 
message:"Give a brief description of your project."},

{type:"input", 
name:"Installation", 
message:"What are the installation instructions for this project?"},

{type:"input", 
name:"Usage", 
message:"Please give some information on this project is to be implemented in every day life."}, 

{type:"input", 
name:"Contribution", 
message:"Enter instructions for future contributions"},
  
{type:"input", 
name:"Credits", 
message:"Who contributed to this project?"},

{type:"list", 
name:"license", 
message:"Licenses used for this project go here.",
choices: ["MIT" , "Apache" , "BSD" , "Unlicense"] 
},

{type:"input", 
name:"Test", 
message:"How would one test the desgin and fucntionality of this project?"},

{type:"input", 
name:"Username", 
message:"Please enter in you GitHub User name here"},

{type:"input", 
name:"Email", 
message:"Please enter in your email information here"},

]; 


// TODO: Create a function to write README file
function writeToFile(data) {
const fileName = "./output/README.md";
fs.writeFile(fileName,data,(err) =>
err ? console.log(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(generateMarkdown(data))
    })
    // console.log(answers);
    
}

// Function call to initialize app
init();
