/**
 * Created by trzmiel007 on 13.04.2016.
 */
var debug = typeof process.env.PROD === 'undefined';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname,'sources'),
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        javascript: ['./index.js']//,
        //html: ["./index.html", "./iframe.html"],
        //icon: ["./favicon.ico"],
        //fonts: ["./css/fonts/MotoIcons.woff", "./css/fonts/MotoSymbols.otf"]
    },
    output: {
        path: path.resolve(__dirname,'app','js'),
        filename: 'script.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, minimize: true })
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                loaders: ['babel-loader'],//['react-hot', 'jsx', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /((\.html)|(\.ico)|(\.woff)|(\.otf))$/,
                loader: "file?name=[path][name].[ext]"
            },
            /*{
                test: /\.scss$/,
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
            },*/
            {
                test: /\.less$/,
                loaders: ["style", "css", "less"]
            },
            /*{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },*/
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            }/*,
            {
                test: /pdf\.worker\.js$/,
                loader: "url-loader?limit=10000"
            }*/
        ]
    },
    debug: true
};
