const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');
const dist = 'static/dist';
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, './src/index.html')
});
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, dist),
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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, dist),
        compress: true,
        port: 3000,
    },
    plugins: [
        htmlWebpackPlugin,
        new CleanWebpackPlugin([dist]),
        new MiniCssExtractPlugin({
            filename: 'main-[hash].css'
        }),
        // new PurifyCssWebpack({
        //     paths: glob.sync(path.join(__dirname, 'src/*.html'))
        // })
    ]
};