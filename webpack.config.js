
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const manifestJson = require('./public/manifest.json');

const config = function (env) {
  	const isProduction = env === 'production';
	return {
		mode: isProduction ? "production" : "development",
		devtool: isProduction ? false : "eval-cheap-module-source-map",
		entry: {
			bundle: ["@babel/polyfill", "./src/index.js"],
		},
		output: {
			path: path.resolve(__dirname, "build"),
			//saves the output of webpack in the project directory
			filename: isProduction ? "js/[name].[hash:8].chunk.js" : "js/[name].js"
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./public/index.html",
				//favicon: './src/hero-image.jpg'  //add your website shortcut icon here
			}),
			new MiniCssExtractPlugin({
				filename: "styles/[name].built.css"
			}),
			new WebpackManifestPlugin({
				generate: () => manifestJson
			}),
			new CopyPlugin({
				patterns: [
				  { from: "./public/portfolio.svg", to: "portfolio.svg" },
				  { from: "./public/preview.jpg", to: "preview.jpg" },
				  { from: "./public/Robots.txt", to: "Robots.txt" },
				  { from: "./public/sitemap.xml", to: "sitemap.xml" },
				],
			}),
		],
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /node_modules/,
						chunks: "initial",
						name: "vendor",
						enforce: true
					}
				}
			}
		},
		devServer: {
			contentBase: "./build",
			host: "localhost",
			open: true,
			historyApiFallback: true,
		},
		module: {
			rules: [
				{
					test: /.js$/,
					exclude: /node_modules/,
					use: "babel-loader"
				},
				{
					test: /.(json)/,
					exclude: /node_modules/,
					use: [{
						loader: 'file-loader',
						options: { name: '[name].[ext]' },
					}],
				},
				{
					test: /.(jpg|png|ogg|mp3)$/,
					use: {
						loader: "file-loader",
						options: {
							name: "static/media/[name].[hash:8].[ext]"
						}
					}
				},
				{
					test: /.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader" }
					]
				}
			]
		}
	}
}
module.exports = config;
