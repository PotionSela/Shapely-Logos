// Importing inquirer
import inquirer from 'inquirer';

// Importing fs (File System)
import fs from 'fs';

// Importing classes from lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes.js");

// Function to write the SVG file using users answers
function writeTofile(fileName, answers) {
    // File starts an an empty string
    let svgString = "";
    // Set the width and height of logo container
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that the user three letter initals are on top of shape
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.shape}`;

    // Conditional check takes users input from the choices and then add shapes properties to SVG string
    let shapeChoice;
    if (answers.shape === "Cirlce") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />`;
    } else {
        shapeChoice = new Square();
        svgString += `<rect x="150" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}" />`;
    }

    // <text> tag gives rise to text alignment, text content, 
    // and text color taken in from the user prompt and give default font size of "40"
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}" >${answer.text}</text`;
    // Closing the </g> tag
    svgString += "</g>";
    // Closing </svg> tag
    svgString += "</svg>";

    // Using fs module to generate svg file, takes in file name given in the prompUser function
    // the svg string, and a ternary operator, handling logging errors
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

// Utilizing inquirer to prompt the user for questions about the logo
function promptUser() {
    inquirer
    .prompt([
        // Questions for the User
        // Three character logo text prompt
        {
            type: 'input',
            name: 'text',
            message: 'What do you want your logo to be? (Only three characters allowed)',
        },
        // Text color prompt
        {
            type: 'input',
            name: 'textColor',
            message: 'Choose the text color',
        },
        // Shape choices prompt
        {
            type: 'rawlist',
            name: 'shape',
            message: 'What is your prefered shape?',
            choices: [ 'Circle', 'Triangle', 'Square'],
        },
        // Logo color prompt
        {
            type: 'input',
            name: 'shapeBackgroundColor',
            message: 'What would you like the background color of your logo to be?'
        },
    ])
    .then((answers) => {
        // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
        if (answers.text.length > 3) {
            console.log("Must enter a value of no more than 3 characters please");
            promptUser();
        } else {
            // Write file function called to generate SVG file
            writeTofile("logo.svg", answers);
        }
    });
}

// Calling the promptUser function so inquirer prompts initiate
promptUser();