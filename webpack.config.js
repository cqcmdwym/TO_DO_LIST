const path = require('path');
const webpack = require('webpack');
//const HTMLWebpackPlugin = require('html-webpack-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        contentBase: __dirname, //contentBase是index.html等非webpack输出文件的地址，默认/
        port: 8080,
        publicPath: "/dist/" //public path是webpack输出的地址，默认/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "stage-0", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.jpg$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: "url-loader" }
                ]
            }
        ]
    },
    // plugins:[
    //     new UglifyJsPlugin()
    // ]
}