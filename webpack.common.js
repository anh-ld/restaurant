const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "template/index.html",
  title: "Hanoi Pizza Ordering System",
  favicon: 'template/favicon.ico',
  meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      { 
        test: /\.js?$/, 
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
      	test: /\.css?$/,
      	use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['build/*']),
    htmlWebpackPlugin,
    new DashboardPlugin()
  ]
};