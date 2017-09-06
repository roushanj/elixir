const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  target: 'node',
  externals:[nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new HtmlWebpackPlugin({
      	title: 'Elixir',
      	template : './views/main.html',
      })
  ]
};
