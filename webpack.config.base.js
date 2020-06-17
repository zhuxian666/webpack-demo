
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '猪猪',
            template: 'src/assets/index.html'
        }),
    ],
    module:{
        rules:[
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:["file-loader"]
            },
            {
                test:/\.styl$/,
                loader:['style-loader','css-loader','stylus-loader']
            },
            {
                test:/\.less$/,
                loader:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.scss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:"sass-loader",
                        options:{implementation:require('dart-sass')}
                    }
                ]
            }
        ]
    }
};