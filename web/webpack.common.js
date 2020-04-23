const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: "public" }
		])
	],
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
		alias: {
			api: path.resolve(__dirname, 'src/api/'),
			assets: path.resolve(__dirname, 'src/assets/'),
			components: path.resolve(__dirname, 'src/components/'),
			styles: path.resolve(__dirname, 'src/styles/')
		}
	},
	module: {
		rules: [
			{ test: /\.scss$/, use: [
				"style-loader",
				"css-loader",
				{
					loader: "sass-loader",
					options: {
						sassOptions: {
							includePaths: ["./src"],
						},
					},
				}
			] },
			{ test: /\.tsx?$/, loader: "babel-loader" },
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					"file-loader",
				],
			}
		]
	}
};
