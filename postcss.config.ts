import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import type { Plugin } from 'postcss';

const config = {
  plugins: [
    tailwindcss as unknown as Plugin,
    autoprefixer as unknown as Plugin,
  ],
};

export default config;