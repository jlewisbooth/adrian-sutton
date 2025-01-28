/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E6280",
        contrast: "#BC0F1E",
        secondary: "#EDC579",
        secondaryDark: "#DDAC47",
        contrastDark: "#421C1A",
        grey: "#575450",
      },
    },
  },
  plugins: [],
};
