const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/App.tsx",
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
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
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
