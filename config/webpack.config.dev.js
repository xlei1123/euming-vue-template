const base = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack');
const path = require('path');
const utils = require('./dev-err-util')
const devConfig = {
    port: 8080,
    host: '0.0.0.0',
}
module.exports = merge(base, {
    mode: 'development',
    devServer: {
        port: devConfig.port,
        host: devConfig.host,
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        hot:true,//热加载
        quiet: true,
    },
    // resolve: {              //不需要编译的情况下  vue-loader处理，*.vue 文件内部的模板会在构建时预编译成 JavaScript。 编译的时候vue.runtime.common.js       
    //     alias: {
    //         vue: 'vue/dist/vue.runtime.js'   //运行时umd版本                   //别名 在vue包中package.json "main": "dist/vue.runtime.common.js",  所以这个地方需要指出引入的vue 其实是'vue/dist/vue.js'
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',

                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
              messages: [`Your application is running here: http://${devConfig.host}:${devConfig.port}`],
            },
            onErrors: true
            ? utils.createNotifierCallback()
            : undefined
        })
        // ...
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('development')
        //     }
        // })      //等同于写 mode: 'development'
    ]
})