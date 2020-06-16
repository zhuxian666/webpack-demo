
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base=require('./webpack.config.base.js')
module.exports = {
    ...base,
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
};