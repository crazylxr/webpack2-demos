## 写在前面
每一个demo之间是有联系的，如果把前面的教程看懂了，后面会感觉轻松点哦！所以请保证你已经把demo1的打包过程看懂，并把代码克隆下来。接下来的都是在demo1下进行改进。
## 文件打包
在app下面随便放一张图片。
然后在index.js里修改代码如下：

```
import React from 'react';
import {render} from 'react-dom';
import webpack from "./webpack.jpg";

class App extends React.Component {
    render() {
        return (
          <div>
            <img src={webpack} alt="webpack图片"></img>
            <p> hello react </p>
          </div>
        )
    }
}
render(<App />, document.getElementById('app'));

```
添加了两行代码

```
import webpack from "./webpack.jpg";
<img src={webpack} alt="webpack图片"></img>
```
第一行是导入图片的途径，第二行是添加img标签，并引用导入的图片作为src

然后安装url-loader

```
npm install --save-dev url-loader
```
修改webpack.config.js

```
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
    ]
  }
}

```
新增了一行

```
{test: /\.(png|gif|jpg|jpeg|bmp)$/i,loader: 'url-loader?limit=10000'}, // 限制大小10kb
```
然后使用webpack重新打包运行index.html就可以看到图片了
## less和css打包
新建一个index.css文件和index.less文件

```
touch app/index.css
touch app/index.less
```
然后在index.css里面添加css代码（当然你也可以自己随便加）如下：

```
p{
  color: red;
}

```
在index.less添加如下代码：

```
p{
  font-size: 33px;
}

```

然后在index.js引入index.css和index.less

```
import React from 'react';
import {render} from 'react-dom';
import webpack from "./webpack.jpg";
import "./index.css";
import "./index.less";

class App extends React.Component {
    render() {
        return (
          <div>
            <img src={webpack} alt="webpack图片"></img>
            <p> hello react </p>
          </div>
        )
    }
}
render(<App />, document.getElementById('app'));

```
添加了一行：

```
import "./index.css";
```
安装css-loader、style-loader和less-loader

```
npm install --save-dev css-loader style-loader less-loader
```
修改webpack.config.js如下

```
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


```
添加了两行

```
  {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
{test: /\.less$/,use: ['style-loader',{ loader: 'css-loader', options: { importLoaders: 1 } },'less-loader']}
```
然后使用webpack重新打包运行index.html就可以看到文字颜色和文字大小变化了。