const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	entry: './index.tsx',
	devServer: {
		hot: true,
		port: '5000',
		
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		liveReload: true,
	},
	target: 'web',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		isDevelopment && new webpack.HotModuleReplacementPlugin(),
		isDevelopment && new ReactRefreshWebpackPlugin(),
	],
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.ts$|tsx/,
				exclude: /node_modules/,
				loader: require.resolve('babel-loader'),
				options: {
					plugins: [
						isDevelopment && require.resolve('react-refresh/babel'),
					].filter(Boolean),
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.png|svg|jpg|gif$/,
				use: ['file-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
