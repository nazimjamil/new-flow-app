// @flow

import webpack from 'webpack';
import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import common from './webpack.common.babel';

const config = merge(common, {
  entry: 'app/index.jsx',
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});

export default config;
