/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@dynamic-quants/config-tools/eslint/nestjs')],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
