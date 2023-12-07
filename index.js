import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'color',
            message: 'What is your prefered color?',
    },
        {
            type: 'rawlist',
            name: 'shapes',
            message: 'What is your prefered shape?',
            choices: ['Square', 'Circle', 'Triangle'],
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