/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,vue}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,vue}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,vue}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

