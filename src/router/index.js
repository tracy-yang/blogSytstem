import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/views/layout';

// 测试页
import HelloWorld from '@/components/HelloWorld';

// 404
import NotFoundComponent from '@/views/404/404';

// 主页

// 文章管理
import article from '@/views/article/article'; // 列表页面
import articelDetail from '@/views/article/articleDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      redirect:'/index/',
      name: '主页',
      component: layout,
      children:[
        {path:'/',component:HelloWorld,name:'主页'}
      ]
    },
    {
      path:'/article',
      redirect:'/article/list',
      name:'文章管理',
      component:layout,
      children:[
        {path:'list',component:article,name:'文章列表'},
        {path:'datail/:id',component:articelDetail,name:'详情页'}
      ]
    },
    { path: '*', component: NotFoundComponent }
  ]
})
