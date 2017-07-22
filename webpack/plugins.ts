/**
 * Webpack plugins configuration
 */

import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import { config } from "./config";

const commonPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    minChunks: mod => {
      return mod.context && mod.context.indexOf("node_modules") !== -1;
    },
    name: "vendor"
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "manifest"
  }),
  new HtmlWebpackPlugin({
    chunkSortMode: config.sortChunks,
    chunks: ["app", "polyfills", "manifest", "vendor"],
    filename: "index.html",
    inject: "body",
    template: "./src/index.html"
  })
];

const prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ["$super", "$", "exports", "require"]
    }
  })
];

export const plugins =
  process.env.NODE_ENV === "production"
    ? commonPlugins.concat(prodPlugins)
    : commonPlugins;
