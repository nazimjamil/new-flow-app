// @flow

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as packageJson from './package.json';

const config = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  entry: './app/index.jsx',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
      title: packageJson.name,
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    modules: [
      '.',
      'src',
      'node_modules',
    ],
  },
};

export default config;
