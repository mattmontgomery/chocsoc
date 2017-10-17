const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'js', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        publicPath: '/app/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chocolate Society online',
            filename: path.resolve(__dirname, 'index.html')
        })
    ],
    resolve: {
        modules: [
            'js',
            'node_modules',
        ]
    },
    node: {
        dns: 'empty',
        net: 'empty'
    }
}
