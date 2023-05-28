/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "gruv-bg-0": "#282828",
      "gruv-bg-1": "#3c3836",
      "gruv-bg-2": "#504945",
      "gruv-bg-3": "#665c54",
      "gruv-bg-4": "#7c6f64",
      "gruv-orange": "#d65d0e",
      "gruv-orange-light": "#fe8019",
    },
    plugins: [],
  }
}
