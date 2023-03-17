
const CopyPlugin = require('copy-webpack-plugin');

var path = process.cwd() + '/dist';

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        path: path,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path,
        watchContentBase: true,
        port: process.env.PORT || 8080,
        host: process.env.HOST || 'localhost'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: 'ts-loader', options: { allowTsInNodeModules: true }}]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './index.html', to: './' },
                { from: './manifest.json', to: './', noErrorOnMissing: true },
                { from: './favicon.ico', to: './', noErrorOnMissing: true },
                { from: './assets', to: './assets', noErrorOnMissing: true },
                { from: './css', to: './css', noErrorOnMissing: true }
            ]
        })
    ]
};
