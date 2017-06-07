## webpack2-demos
 一些webpack的demo，从简单到复杂，一步一步搭成项目真正能用的环境。

## 怎么使用

首先克隆项目

```
# Linux & Mac
$ git clone git@github.com:crazylxr/webpack2-demos.git

# Windows
$ git clone https://github.com/crazylxr/webpack2-demos.git
```
然后切换到webpack2-demos目录

```
cd webpack2-demos
```

里面每一个demo都是独立的，都需要安装依赖，以demo1为为例子，你直接可以将demo里面的index.html运行在浏览器中。如果你需要在上面做修改，进行重新自己打包，就按下面的步骤来。

```
cd demo1
npm install
```
然后你可以做一些修改，然后

```
$ webpack
```
就可以重新把index.html运行在浏览器中看效果
