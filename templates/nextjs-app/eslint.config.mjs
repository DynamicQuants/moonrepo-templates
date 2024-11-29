import { eslintNextjs } from '@dynamic-quants/config-tools';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

export default eslintNextjs(
  new FlatCompat({
    recommendedConfig: js.configs.recommended,
  }),
);
