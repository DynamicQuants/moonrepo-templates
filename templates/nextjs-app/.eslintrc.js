/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@dynamic-quants/config-tools/eslint/nextjs')],
  parserOptions: {
    project: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
