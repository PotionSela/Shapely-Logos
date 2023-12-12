// Importing inquirer
import inquirer from 'inquirer';

// Importing fs (File System)
import fs from 'fs';

// Importing classes from lib/shapes directory
const { Circle, Triangle, Square } = require("./lib/shapes")

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