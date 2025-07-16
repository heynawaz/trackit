import type { Config } from 'prettier';
import type { PluginOptions } from 'prettier-plugin-tailwindcss';

const prettierConfig: Config & PluginOptions = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 150,
  arrowParens: 'avoid',
};

export default prettierConfig;