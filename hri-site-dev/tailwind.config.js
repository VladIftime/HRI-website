/** @type {import('tailwindcss').Config} */
const production = !process.env.ROLLUP_WATCH
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/routes/**/*.svelte'],
  mode: 'jit',
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
