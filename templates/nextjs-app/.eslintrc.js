/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@dynamic-quants/config-tools/eslint/nextjs'],
  parserOptions: {
    project: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
