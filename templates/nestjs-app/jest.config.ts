import config from '@dynamic-quants/config-tools/jest/nestjs';
import { Config } from 'jest';

export default {
  ...config,
  transform: {
    '^.+\\.(t|j)s?$': '@swc/jest',
  },
} as Config;
