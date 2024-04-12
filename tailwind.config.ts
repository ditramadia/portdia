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
        'primary': '#7B46F3',
        'on-primary': '#F6F6F9',
        'secondary': '#5392EA',
        'on-secondary': '#F6F6F9',
        'tertiary': '#5FF3D6',
        'on-tertiary': '#1B1C1F',
        'primary-container': '#1A0B3E',
        'on-primary-container': '#5392EA',
        'secondary-container': '#05244F',
        'on-secondary-container': '#5392EA',
        'tertiary-container': '#033C31',
        'on-tertiary-container': '#5FF3D6',
        'primary-dim': '#3C1594',
        'secondary-dim': '#1B4E96',
        'tertiary-dim': '#22A48B',
        'surface-dim': '#131315',
        'surface': '#1B1C1F',
        'surface-bright': '#313236',
        'on-surface': '#F6F6F9',
        'on-surface-variant': '#B1B2BA',
        'outline': '#505158',
        'outline-variant': '#E0E1E4',
      }
    },
  },
  plugins: [],
};
export default config;
