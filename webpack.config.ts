/**
 * Webpack configuration
 */

import { entry, modules, output, plugins, resolve } from "./webpack";

// tslint:disable-next-line:export-name
export = {
  devtool: "inline-sourcemap",
  entry,
  module: modules,
  output,
  plugins,
  resolve,
  watch: process.env.NODE_ENV !== "development" ? undefined : true
};
