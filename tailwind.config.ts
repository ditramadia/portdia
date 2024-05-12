import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#131313',
        'light': '#F9F9F9',
        'dim': '#868793',
        'primary-container': '#1A0B3E',
        'primary-dim': '#3C1594',
        'primary': '#7B46F3',
        'secondary-container': '#05244F',
        'secondary-dim': '#1B4E96',
        'secondary': '#5392EA',
        'tertiary-container': '#033C31',
        'tertiary-dim': '#22A48B',
        'tertiary': '#5FF3D6',
        'surface': '#131313',
        'surface-container': '#1B1C1F',
        'outline': '#505158',
        'outline-variant': '#E0E1E4',
        'glass': '#F6F6F6',
        'glass-outline': '#F6F6F6',
        'glass-outline-variant': '#505158',
        'neutral-900': '#131313',
        'neutral-300': '#B1B2BA',
        'neutral-100': '#F9F9F9',
      }
    },
    screens: {
      'md': '768px',
      'lg': '960px',
    }
  },
  plugins: [],
};
export default config;
