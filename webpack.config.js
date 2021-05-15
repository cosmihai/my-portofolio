const currentTask = process.env.npm_lifecycle_event;
const fse = require('fs-extra');
const path = require('path');
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-hexrgba"),
  require("postcss-nested"), 
  require("autoprefixer"),
  require("postcss-simple-vars"), 
]
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', () => {
      fse.copySync('./app/assets/images', './dist/assets/images')
    })
  }
}

let pages = fse.readdirSync('./app')
.filter(file => file.endsWith('.html'))
.map(page => new HtmlWebpackPlugin({
  filename: page,
  template: `./app/${page}`
}));

let cssConfig = {
  test: /\.css$/i,
  use: [
    "css-loader", 
    { 
      loader: "postcss-loader", 
      options: { postcssOptions: { plugins: postCSSPlugins } } 
    }
  ]
}

let config = {
  entry: "./app/assets/scripts/App.js",
  plugins: pages,
  module: {
    rules: [
      cssConfig
    ]
  }
}

if(currentTask == 'dev') {
  cssConfig.use.unshift("style-loader");
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, "app")
  };
  config.devServer = {
    before: (app, server) => {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true, 
    port: 3030,
    host: "0.0.0.0"
  };
  config.mode = "development";
}

if(currentTask == 'build') {
  config.module.rules.push({
    test:/\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  });
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  };
  config.mode = 'production';
  config.optimization = {
    splitChunks: { chunks: 'all', minSize: 1000 },
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  };
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
    new RunAfterCompile()
  )
}
module.exports = config;