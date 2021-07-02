const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 
                    'css-loader',
                    'less-loader'
                ],
            },
        ]
    },
    plugins: isProduction ? [new MiniCssExtractPlugin()] : []
};

module.exports = config;