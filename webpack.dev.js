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
    }
}

/** @type {import('webpack').Configuration} */
module.exports = merge(webpackDefaultConfig, config);