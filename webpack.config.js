const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index:path.resolve(__dirname, './index.js')
    },
    output:{
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath:'http://localhost:3000/dist/',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader'
                }

            }
        ]
    },
    plugins:[
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html",
            filename: 'index.html',
        })
    ]

};