/**
 * Webpack output config
 */

import * as path from "path";
import * as process from "process";

const name =
  process.env.NODE_ENV === "production"
    ? "[name].[hash].bundle.js"
    : "[name].[hash].bundle.js";

export const output = {
  filename: name,
  path: path.join(process.cwd(), "dist"),
  publicPath: "/"
};
