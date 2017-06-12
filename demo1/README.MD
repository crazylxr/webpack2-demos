## 牛刀小试
首先切换目录到你的工作空间

```Bash
mkdir reactDemo  //新建目录
cd reactDemo/   //切换到reactDemo下
npm init -y   //初始化package.json
```
执行完之后会在改目录下产生一个[package.json](http://javascript.ruanyifeng.com/nodejs/packagejson.html)，文件内容大概如下：

```
{
  "name": "reactDemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
## 安装webpack
### 使用npm安装webpack

```
npm install webpack --save-dev
```
Webpack需要某些配置才能完成给他的工作。所以我们需要创建一个webpack.config.js的配置文件。

```
touch webpack.config.js
```
然后在该文件中填入以下代码：
```Javacript
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry : path.resolve(__dirname, 'app/index.js'),
  output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
}

```
然后执行以下代码来创建文件

```
mkdir app
cd app
touch index.html
touch index.js
```
在index.html中添加以下代码

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>从0快速搭建react环境</title>
  </head>
  <body>
    <div id="app" />
    <script src="../build/bundle.js" type="text/javascript"></script>
  </body>
</html>

```
在index.js中添加以下代码：

```
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return (
          <div>
            <p> hello react </p>
          </div>
        )
    }
}

render(<App />, document.getElementById('app'));

```
安装babel

```
 npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
 touch .babelrc
```
新建一个.babelrc文件

```
touch .babelrc
```

在.babelrc文件里添加

```
{
    "presets": ["es2015", "react"]
}
```
在webpack.config.js添加loader

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
  ]
  }
}

```

安装react

```
npm i --save react react-dom
```
然后打包

```
webpack
```
