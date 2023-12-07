import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shapes',
            message: 'What is your prefered shape?',
            choices: ['Square', 'Circle', 'Triangle'],
    },
    ])
    .then(answers => {
        console.info('Answer: ', answers.shapes);
    });