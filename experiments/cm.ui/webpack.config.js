const path = require('path')
const webpack = require('webpack')  
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const bundleOutputDir = 'wwwroot/dist'

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const mode = isDevBuild ? 'development' : 'production'

    return [{
        stats: { modules: false },

        mode: mode,

        context: __dirname,

        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },

        entry: {
            'main': './ClientApp/main.js'
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        },

        module: {
            rules: [
                { test: /\.vue$/, use: 'vue-loader' },
                { test: /\.js/, use: 'babel-loader' },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
                { test: /\.(png|jpg|jpeg|gif|svg|woff|ttf)$/, use: 'url-loader?limit=25000' },
            ]
        },

        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: '/dist/'
        },

        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname, 'wwwroot')
            }),

            new VueLoaderPlugin()
        ]
    }];
};
