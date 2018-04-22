const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugn = require('html-webpack-plugin');

module.exports = env => {
	const isProd = !!env.prod;
	const config = {
		context: path.resolve('client'),
		entry: './index',
    mode: isProd ? "production" : "development",
    devtool: isProd ? "none" : "source-map",
		output: {
			filename: 'bundle.js',
			path: path.resolve('./build'),
			publicPath: '/build/',
		},
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
          loader: "babel-loader",
          exclude: /node_modules/
				}
			]
		},
    devServer: {
      contentBase: "./build"
    },
    plugins: [
      new HtmlWebpackPlugn({
        title: "Movies DB App",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      })
    ]
	};
	return config;
};