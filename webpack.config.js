const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  mode: "development",
  watch: true
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['env']
  //         }
  //       }
  //     }
  //   ]
  // }
}