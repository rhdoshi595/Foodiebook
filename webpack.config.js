const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/facebook.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|browser_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'sorce-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
