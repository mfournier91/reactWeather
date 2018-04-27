const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
      publicPath: "/"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.(css)$/, use: ['style-loader', 'css-loader']},

    ]
  },
    devServer: {
      historyApiFallback: true
    },
    plugins: [HtmlWebpackPluginConfig]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
      new webpack.DefinePlugin({
          'process.ENV' : {
            'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
          }
      }),
      new webpack.optimize.UglifyJsPlugin()
  )
}


module.exports = config;
