const path = require('path');
const { merge } = require('webpack-merge')
const webpackDefaultConfig = require('./webpack.config');


const config = {
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },
    module: {
        rules: [     
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /.(css|sass|scss)$/,
            },
        ]
    },
    devtool: 'eval-source-map',
}

/** @type {import('webpack').Configuration} */
module.exports = merge(webpackDefaultConfig, config);