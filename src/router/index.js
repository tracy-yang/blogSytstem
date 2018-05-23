import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'

// 测试页
import HelloWorld from '@/components/HelloWorld'

// 登陆
import login from '@/views/login/index'

// 404
import NotFoundComponent from '@/views/404/404'

// 主页

// 文章管理
import article from '@/views/article/article' // 列表页面
import articelDetail from '@/views/article/articleDetail' // 文章详情页
import addNewArticle from '@/views/article/addNewArticle' // 文章详情页

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: login, name: '登陆'},
    {
      path: '/',
      redirect: '/home',
      name: '管理',
      hidden: true
    },
    {
      path: '/home',
      redirect: '/home/index',
      name: '主页',
      component: layout,
      children: [
        {path: 'index', component: HelloWorld, name: '主页'}
      ]
    },
    {
      path: '/article',
      redirect: '/article/list',
      name: '文章管理',
      component: layout,
      children: [
        {path: 'list', component: article, name: '文章列表'},
        {path: 'datail/:id', component: articelDetail, name: '详情页'},
        {path: 'addNewArticle', component: addNewArticle, name: '新增'},
        {path: 'addNewArticle/:id', component: addNewArticle, name: '编辑'}

      ]
    },
    { path: '*', component: NotFoundComponent }
  ]
})
