module.exports = {
  plugins: {
    // Remove 'tailwindcss' if it was here
    "@tailwindcss/postcss": {}, // Add this line
    autoprefixer: {}, // Keep other plugins you might have
  },
};
