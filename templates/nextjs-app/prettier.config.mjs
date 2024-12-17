import prettier from '@dynamic-quants/config-tools/prettier';

const config = {
  ...prettier,
  importOrder: [...prettier.importOrder, '^@/(actions|components|hooks|api)/(.*)$'],
};

export default config;
