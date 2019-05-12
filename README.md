# NodeJS express项目


## Express 应用程序生成器

> 使用express生成器 官网地址：http://www.expressjs.com.cn/starter/generator.html


### 本地安装
> 通过应用生成器工具 express-generator 可以快速创建一个应用的骨架。

express-generator 包含了 express 命令行工具。通过如下命令即可安装：

```
cnpm install express-generator --save
```
### 安装依赖包
```
cnpm install
```

### 启动项目
```
cnpm start
```
> 然后在浏览器中打开 http://localhost:3000/ 
> 此时每次修改文件必须重启项目操作很繁琐，下面安装nodemon插件保存自动重启项目
---
## 安装nodemon插件

```
cnpm install nodemon --save
```

### 在项目目录创建nodemon.json配置文件
``` json
{
    "restartable": "rs",
    "ignore": [
        ".git",
        ".svn",
        "node_modules/**/node_modules"
    ],
    "verbose": true,
    "execMap": {
        "js": "node --harmony"
    },
    "watch": [

    ],
    "env": {
        "NODE_ENV": "development"
    },
    "ext": "js json"
}
```
### 在package.json中配置
```json
 "scripts": {
    "start": "node ./bin/www",
    "auto": "nodemon ./bin/www"
  }
```
### 启动项目
```
npm run auto
```
---