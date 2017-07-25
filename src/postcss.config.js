/**
 * Reasons..
 * Check out postcss docs.
 */
module.exports = {
  parser: "sugarss",
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {},
    cssnano: {}
  }
};