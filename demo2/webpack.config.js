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
      {test: /\.(png|gif|jpg|jpeg|bmp)$/i,loader: 'url-loader?limit=10000'}, // 限制大小10kb
      {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {test: /\.less$/,use: ['style-loader',{ loader: 'css-loader', options: { importLoaders: 1 } },'less-loader']}
    ]
  }
}
