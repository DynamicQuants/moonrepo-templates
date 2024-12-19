import { jestNestjs } from '@dynamic-quants/config-tools/jest';
import { Config } from 'jest';

const config: Config = {
  ...jestNestjs,
  transform: { '^.+\\.(t|j)s?$': '@swc/jest' },
};

export default config;
