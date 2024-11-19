import type { Config } from 'tailwindcss';

import tailwindConfig from '@dynamic-quants/config-tools/tailwind';

const config: Config = {
  presets: [tailwindConfig],
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
  plugins: [],
};

export default config;
