
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base=require('./webpack.config.base.js')
module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css',
            chunkFilename:'[id].[contenthash].css',
            ignoreOrder:false,
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:[{
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:'../',
                    },
                },
                'css-loader',
            ],
            },
        ],
    }
};