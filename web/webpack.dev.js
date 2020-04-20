const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
});
