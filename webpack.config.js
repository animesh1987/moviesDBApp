const webpack = require('webpack');
const path = require('path');

module.exports = env => {
	const config = {
		context: path.resolve('client'),
		entry: './index.js',
		watch: true,
		output: {
			filename: 'bundle.js',
			path: path.resolve('./build'),
			publicPath: '/build/',
		},
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
					use: [{
						loader: "babel-loader",
						options: {
							cacheDirectory: true,
							presets: ['react', 'es2015']
						}
					}]
				}
			]
		}
	};
	return config;
}