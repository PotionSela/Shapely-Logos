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

    
}