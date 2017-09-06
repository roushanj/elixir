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
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new HtmlWebpackPlugin({
      	inject: true,
      	chunks:['main'],
      	title: 'Elixir',
      	template : './src/views/main.html',
      }),
      new HtmlWebpackPlugin({
      	inject:true,
      	chunks:['index'],
      	title: 'Elixir',
      	template : './src/views/index.html',
      })
  ]
};
