module.exports = {
  // @see https://tailwindcss.com/docs/using-with-preprocessors#nesting
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
