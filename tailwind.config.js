module.exports = {
    content: [
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/js/**/*.js"
    ],
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
};

// Import tw-elements di bagian yang membutuhkannya (bukan di dalam module.exports)
const { Carousel, initTWE } = require("tw-elements");

// Inisialisasi tw-elements jika dibutuhkan
initTWE();
