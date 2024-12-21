import { program } from 'commander';
import inquirer from 'inquirer';

import { greet } from './commands';

program.version('1.0.0').description('My Node CLI');

program.action(() => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's your name?",
      },
    ])
    .then((answers) => greet(answers.name));
});

program.parse(process.argv);
