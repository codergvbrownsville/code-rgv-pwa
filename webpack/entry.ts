/**
 * Webpack entry config
 */
const vendors = [
  "react",
  "react-dom",
  "redux",
  "ramda",
  "redux-observable",
  "immutable",
  "rxjs",
  "react-redux",
  "react-router",
  "react-router-dom"
];

export const entry = {
  app: "./src/main.tsx",
  vendor: vendors
};
