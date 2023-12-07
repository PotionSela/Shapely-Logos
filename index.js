import inquirer from 'inquirer';

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
            message: 'What color do you want your three letter logo to be?',
        },
    ])
    .then((answers) => {
        console.info('Answers: ', answers);
        //Calling the init function
        init();
    });

function init() {
    console.log('Initialization logic goes here')
}