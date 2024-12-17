import { eslintNextjsApp } from '@dynamic-quants/config-tools/eslint';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

export default eslintNextjsApp(
  new FlatCompat({
    recommendedConfig: js.configs.recommended,
  }),
);
