import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'faveReptile',
        message: 'What is your favorite reptile?'
    },
    ])
    .then(answers => {
        console.info('Answer: ', answers.faveReptile)
    });