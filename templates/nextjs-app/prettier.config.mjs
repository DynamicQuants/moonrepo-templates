import { prettier } from '@dynamic-quants/config-tools';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  ...prettier,
  // Add the new import order for your project.
  importOrder: [...prettier.importOrder, '^@/(actions|components|hooks|api)/(.*)$'],
};

export default config;
