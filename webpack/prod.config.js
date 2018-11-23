const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./common.config.js');
module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false
    },
    plugins: [
        new CleanWebpackPlugin(['static/dist'], { root: path.resolve(__dirname, '..'), verbose: true }),
        new UglifyJSPlugin(),
    ]
});