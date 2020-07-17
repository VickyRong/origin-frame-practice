> 运行服务端代码命令 `node server/app.js` ,服务端监听3000端口。
> 运行客户端代码命令 `npm start`,自动编译到dist文件，浏览器自动访问dist目录下index.html页面，可在webpack.config.js文件进行配置。
1.现在的浏览器不支持ES6语法和JSX语法，所以要通过webpack中的`loader`系统去转译，在loader中装 `babel` 或是类似的转译器;
2.在package.json中配置 `webpack-dev-server`，可以启动web服务运行项目以及实时重新家在（热更新）等功能；