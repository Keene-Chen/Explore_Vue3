const path = require('path');

// 1.引入 html-webpack-plugin 插件
const HtmlPlugin = require('html-webpack-plugin');

// 2.创建插件实例对象
const htmlPlugin = new HtmlPlugin({
  template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
  filename: 'index.html', // 设置生成的内存页面的名称
});

// webpack 配置文件遵循着 CommonJS 规范
module.exports = {
  // mode 用来指定构建模式有两个值 development 和 production
  mode: 'development',
  // entry 指定入口文件
  entry: path.join(__dirname, './src/index.js'),
  // output 指定输出文件
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // plugins 数组是 webpack 打包期间会用到的一些插件列表
  plugins: [htmlPlugin], // 3.将插件添加到 webpack 中
  // devServer 用来配置 webpack-dev-server 的
  devServer: {
    open: true, // 自动打开浏览器
    host: '127.0.0.1', // 设置启动时候的运行主机
    port: 80, // 设置启动时候的运行端口
  },
};
