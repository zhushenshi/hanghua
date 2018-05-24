import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Index from '@/components/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
