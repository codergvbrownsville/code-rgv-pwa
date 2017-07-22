/**
 * Webpack modules config
 */

import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import * as path from "path";
import * as process from "process";

export const modules = {
  loaders: [
    {
      exclude: /node_modules/,
      loaders: ["awesome-typescript-loader"],
      test: /\.tsx$/
    },
    {
      loaders: ["awesome-typescript-loader"],
      test: /\.ts$/
    },
    {
      enforce: "pre",
      loader: "source-map-loader",
      test: /\.js$/
    },
    {
      loader: "html-loader",
      test: /\.html$/
    },
    {
      loader: "file-loader?name=[path]/[name].[ext]",
      test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot|PNG)$/
    },
    {
      loader: require.resolve("file-loader"),
      test: /\.png$/
    },
    {
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "postcss-loader"]
      }),
      test: /\.css$/
    },
    {
      loader: "raw-loader",
      test: /\.css$/
    },
    {
      loader: "json-loader",
      test: /\.json$/
    },
    {
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      }),
      test: /\.scss$/
    },
    {
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      }),
      test: /\.sass$/
    }
  ]
};
