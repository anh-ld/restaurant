const HtmlWebPackPlugin = require("html-webpack-plugin")
const DashboardPlugin = require("webpack-dashboard/plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const RobotstxtPlugin = require("robotstxt-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const paths = require('./paths')

const {atom, action, asset, reducer, type, util, config, src, build, root} = paths

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "template/index.html",
    title: "Paolo & Chi Westlake Restaurant",
    favicon: 'template/favicon.ico',
    meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
})

const options = { filePath: './robots.txt' }

module.exports = {
    entry: [src + '/index.tsx'],
    output: {
        path: build,
        filename: '[name].bundle.js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            Atom: atom,
            Action: action,
            Reducer: reducer,
            Type: type,
            Util: util,
            Asset: asset,
            Config: config,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
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
                        outputPath: 'assets/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {root}),
        htmlWebpackPlugin,
        new RobotstxtPlugin(options),
        new DashboardPlugin(),
        new Dotenv()
    ]
}