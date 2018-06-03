// @flow

import merge from 'webpack-merge';
import common from './webpack.common.babel';

const config = merge(common, {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [],
});

export default config;
