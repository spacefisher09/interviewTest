const path= require('path');
const dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js'
    },
    devtool:'cheap-module-eval-source-map', //建立除錯 檔案指向map, 出錯時才知道在哪個檔案
    devServer: { 
        port: 3000, 
        open: true
    },
    module:{
        rules:[
            {
                test: /\.js$/,use:'babel-loader',exclude:[/node_modules/,/src[\\/]public[\\/]js/]
            },
            {
                test : /\.s[ac]ss$/i, use:[MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test : /\.css$/, use:['style-loader','css-loader'],exclude:[/node_modules/]
            },
            {
                test: /\.(png|jpe?g|gif|ico|eot|otf|svg|ttf|woff|woff2)$/i,
                use:[
                    {loader: 'file-loader', options: {name:'[name].[ext]'}}
                ] 
            }
        ]
    },
    plugins:[
        //建立index.html在build裡的plugin
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',  //use this index.html as basis 
            filename: 'index.html',   //generate a index.html file
            inject: 'body'   // Inject all scripts into the body
        }),
        //及時更新react components plugin
        new CleanWebpackPlugin(), 
        //壓縮所有的css整理一塊的plugin
        new MiniCssExtractPlugin(),
        //get .env variable
        new dotenv()
    ]
};