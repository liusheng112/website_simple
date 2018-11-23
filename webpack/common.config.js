const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src', 'index.html'),
    meta: {
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
    favicon: '../static/favicon.ico',
    inject: true
});

module.exports = {
    entry: path.join('../src' + '/app.js'),
    output: {
        path: path.join(__dirname, '../static/dist'),
        filename: 'main-[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')(),
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            }
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        new MiniCssExtractPlugin({
            filename: 'main-[hash].css',
        }),
    ]
};