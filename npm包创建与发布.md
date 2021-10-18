npm 包的创建与发布

### 1. npm init

创建项目目录，初始化 package.json
配置：
name:项目名称（npm 包的名称）
version:版本信息
main：入口文件

### 2.创建入口文件 index.js

export const add = function (a, b) {
return a + b
}
这里我们写一个求和的函数

### 3.将我们的项目发布到 github 上去

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/xxx/xxx.git
git push -u origin main

### 4.创建 readme.md 文件对我们的包进行说明

# utils-list

     前端工具库

# install

    npm install -g utils-list
    #github
    https://github.com/dabaoRain/utils-list

# use

     import {add} from 'utils-list'
     console.log(add(10,20)) ==> 30

### 5.首先要有一个 npm 账号

    如果没有的话；
    https://www.npmjs.com/signup

    创建好npm账号后，在命令行执行 npm login
    然后输入密码，登录成功

### 6.发布

    npm publish完成最终发布
    判断如何发布成功了一个npm包？
    访问https://www.npmjs.com/ npm官网进行搜索我们的npm包名称，
    如果可以搜索到，那么我们的npm包就完成了最终发布。
