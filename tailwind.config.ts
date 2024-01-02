import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#575DFB',
      'light': '#fff',
      'grey': '#C8C8C8',
      'ash': '#ECECEC',
      'success': '#3ABF38',
      'light-70': '#F4F4F4',
      'grey-text': '#3E3E3E'
    },
    extend: {},
  },
  plugins: [],
}
export default config
