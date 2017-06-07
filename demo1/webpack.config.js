var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry : path.resolve(__dirname, 'app/index.js'),
  output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
  module : {
  rules : [
    {test: /\.(js|jsx)$/, exclude: /node_modules/,use : ['babel-loader']},
  ]
  }
}
