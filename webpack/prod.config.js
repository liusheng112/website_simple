const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./common.config.js');
module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false
    },
    plugins: [
        new UglifyJSPlugin()
    ]
});