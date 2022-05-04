const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                type: "asset",
                test: /.(png|svg|jpg|jpeg|gif)$/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./public/assets", to: "images" }
              ],
        })
    ]
}