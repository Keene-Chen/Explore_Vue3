import { createApp } from 'vue';
// import App from './App.vue';
// import App from './components/03_style/App.vue';
// import App from './components/04_props/App.vue';
// import App from './components/05_class&style/App.vue';
import App from './components/06_MyHeader/App.vue';

// 1.导入全局组件
import Swiper from './components/01_globalReg/Swiper.vue';
import Test from './components/01_globalReg/Test.vue';

// 2.注册全局组件
const app = createApp(App);
// 使用commonent方法注册全局组件,第一个参数是组件名,第二个参数是组件对象,component方法可以链式调用
// 在注册组件期间，除了可以直接提供组件的注册名称之外，还可以把组件的 name 属性作为注册后组件的名称
app.component('MySwiper', Swiper).component(Test.name, Test);

app.mount('#app');
