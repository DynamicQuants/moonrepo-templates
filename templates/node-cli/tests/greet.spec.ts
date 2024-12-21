import chalk from 'chalk';

import { greet } from '../src/commands';

describe('Greet Command', () => {
  it('Should greet the user with the correct message', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const name = 'Alice';

    greet(name);
    expect(consoleLogSpy).toHaveBeenCalledWith(chalk.green(`Hello, ${name}!`));
    consoleLogSpy.mockRestore();
  });
});
