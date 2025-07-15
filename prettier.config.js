/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const prettierConfig = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 150,
  arrowParens: "avoid",
};

export default prettierConfig;
