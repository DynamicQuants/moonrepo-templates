import chalk from 'chalk';

/**
 * Greet the user.
 * @param name - The name of the user
 * @returns A greeting message
 */
export function greet(name: string): void {
  console.log(chalk.green(`Hello, ${name}!`));
}
