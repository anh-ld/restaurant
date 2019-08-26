const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "template/index.html",
  title: "Hanoi Pizza Ordering System",
  favicon: 'template/favicon.ico',
  meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
});

const options = {
  filePath: './robots.txt'
};

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()],
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
    new RobotstxtPlugin(options),
    new DashboardPlugin(),
    new Dotenv()
  ]
};