const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "main.ts"),

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "..", "tsconfig.json")
          }
        },
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  mode: "development",

  devtool: "inline-source-map",
};