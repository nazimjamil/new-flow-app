// @flow

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as packageJson from './package.json';

const config = {
  devtool: 'inline-source-map',
  entry: './app/index.jsx',
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
      },
    }],
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
