// 1.使用ES6模块导入jQuery
import $ from 'jquery';

// 2.实现隔行变色的效果
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue');
  $('li:even').css('backgroundColor', 'cyan');
});
