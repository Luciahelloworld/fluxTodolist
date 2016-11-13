var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, "build");
var APP_PATH = path.resolve(ROOT_PATH, "app");

module.exports = {
	entry:{
		app:path.resolve(APP_PATH,"app.jsx")
	},
	output:{
		path:BUILD_PATH,
		filename:'bundle.js'
	},
	//enable dev source map
  devtool: 'cheap-eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  //import的时候可以加载.jsx文件了
  resolve:{
  	extensions:["",".js",".jsx"],
  	root:APP_PATH
  },
	module:{
		
		loaders:[
			{
				test:/\.jsx?$/,
				loaders:['babel'],
				include:APP_PATH
			}
		]
	},
	plugins:[
		new HtmlwebpackPlugin({
			title:'flux todo list'
		})
	]
}