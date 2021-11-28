const { merge } = require('webpack-merge')
const webpackDefaultConfig = require('./webpack.config');


const config = {
    mode: 'production',
}

/** @type {import('webpack').Configuration} */
module.exports = merge(webpackDefaultConfig, config);