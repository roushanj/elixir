const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
  	app: path.join(__dirname,'src','server.js')
   },
  target: 'node',
  externals:[nodeExternals()],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
      new HtmlWebpackPlugin({
      	inject: true,
      	chunks:['app'],
      	title: 'Elixir',
      	template : './src/views/main.html',
      }),
      new HtmlWebpackPlugin({
      	inject:true,
      	chunks:['app'],
      	title: 'Elixir',
      	filename:'views/index.html',
      	template : './src/views/index.html',
      })
  ]
};
