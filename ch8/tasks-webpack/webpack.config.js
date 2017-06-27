const webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		filename: './dist/main.js'
	},
	module: {
	  loaders: [
	    {
	      test: /.js$/,
	      loaders: 'buble-loader'
	    }
	  ]
	}
}