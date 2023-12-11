// Importing inquirer
import inquirer from 'inquirer';

// Importing fs (File System)
import fs from 'fs';

// Importing svg2png
import svg2png from 'svg2png';


// Questions to have the user input
inquirer  
    .prompt([
        {
            type: 'input',
            name: 'backgroundcolor',
            message: 'What would you want the background of your logo color to be?',
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'What color do you want your font to be?',
        },
        {
            type: 'rawlist',
            name: 'shapes',
            message: 'What is your prefered shape?',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            name: 'logoletters',
            message: 'What do you want your three letter logo to be?',
        },
    ])
    // Have the answers show up
    .then((answers) => {
        console.info('Answers: ', answers);
        //Calling the init function
        init(answers);
    });

// function for initialization logic
function init(answers) {
    console.log('Initialization logic goes here');

    // Generate SVG content based on user answers
    const svgContent = generateSVG(answers);

    // Save the SVG content to a file
    const svgFileName = 'logo.svg';
    fs.writeFileSync(svgFileName, svgContent);
    console.log(`Generated ${svgFileName}`);

    // Convert the SVG file to PNG
    const pngFileName = 'logo.png';
    svg2png(svgFileName, pngFileName, (err) => {
        if (err) {
            console.error('Error converting SVG to PNG', err);
        } else {
            console.log(`Converted ${svgFileName} to ${pngFileName}`)
        }
    });
}

// Function to generate SVG content
function generateSVG(answers) {
    // Implement the logic to generate SVG content based on user answers
    let svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    svgContent += `</svg>`;
    return svgContent;
}