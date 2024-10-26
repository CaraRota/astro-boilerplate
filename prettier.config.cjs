/** @type {import("prettier").Config} */
module.exports = {
  // Spread the standard config
  ...require('prettier-config-standard'),

  // Add your own custom settings here
  printWidth: 150,
  plugins: [require.resolve('prettier-plugin-astro'), 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
