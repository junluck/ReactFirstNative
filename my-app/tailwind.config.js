/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#200322", // Example primary color
        secondary: "#29042C", // Example secondary color
        accent: "#161616", // Example accent color
        background: "#F3F4F2", // Example background color
      },
    },
  },
  plugins: [],
}