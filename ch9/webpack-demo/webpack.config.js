const path = require('path');
const webpack = require('webpack');
const inProduction = (process.env.NODE_ENV === 'production');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: ['jquery']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
       {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /.js$/,
        loaders: 'buble-loader'
      }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin("styles.css"),
    new CleanWebpackPlugin(['dist'], {
      root:  __dirname,
      verbose:  true,  
      dry:      false
    }),
    new ManifestPlugin()
  ]
};

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}