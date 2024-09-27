const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LicensePlugin = require('webpack-license-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin(),
    new LicensePlugin({
        outputFilename: 'oss-licenses.json'
    }),
    new FileManagerPlugin({
        events: {
          onEnd: {
            copy: [
                { source: './dist/*.js', destination: '../wagtailmdx/wagtailmdx/static/js' },
                { source: './dist/*.txt', destination: '../wagtailmdx/wagtailmdx/static/js' },
                { source: './dist/*.css', destination: '../wagtailmdx/wagtailmdx/static/css' },
                { source: './dist/oss-licenses.json', destination: '../wagtailmdx/oss-licenses.json' },
              ],
          }
        }})
    ],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mdx.js',
        libraryTarget: 'umd',
        library: 'MDXEditorWrapper'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    }
};
