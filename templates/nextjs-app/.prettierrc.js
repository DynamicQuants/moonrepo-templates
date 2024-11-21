const base = require('@dynamic-quants/config-tools/prettier');

/** @type {import("prettier").Config} */
module.exports = {
  ...base,
  // Add the new import order for your project.
  importOrder: [...base.importOrder, '^@(actions|components|hooks|api)/(.*)$'],
};
