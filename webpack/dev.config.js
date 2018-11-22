const merge = require('webpack-merge');
const common = require('./common.config');
module.exports = merge(common, {
    mode:'development',
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: './static/dist',
        port: 8888,
        historyApiFallback: true
    }
});