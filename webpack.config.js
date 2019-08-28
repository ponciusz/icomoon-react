const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "public", "index.html")
});

module.exports = {
  entry: path.join(__dirname, "index.tsx"),
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "demo")
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [htmlWebpackPlugin]
};
