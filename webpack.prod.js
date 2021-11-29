const { merge } = require('webpack-merge')
const webpackDefaultConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    module: {
        rules: [     
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                test: /.(css|sass|scss)$/,
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
}

/** @type {import('webpack').Configuration} */
module.exports = merge(webpackDefaultConfig, config);