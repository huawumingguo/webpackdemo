var webpack = require('webpack');
var envPlugin = new webpack.DefinePlugin({
	_mypath: 14
});

module.exports = {
	entry: './entry.js',
	output: {
		filename: 'bundle.js'
	},
	plugins: [envPlugin]
};