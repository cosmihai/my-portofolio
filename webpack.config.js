const path = require('path');
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-hexrgba"),
  require("postcss-nested"), 
  require("autoprefixer"),
  require("postcss-simple-vars"), 
]

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  devServer: {
    before: (app, server) => {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true, 
    port: 3030,
    host: "0.0.0.0"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", 
          "css-loader", 
          { 
            loader: "postcss-loader", 
            options: { postcssOptions: { plugins: postCSSPlugins } } 
          }
        ]
      }
    ]
  }
}