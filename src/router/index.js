import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Index from '@/components/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
	{
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/header',
      name: 'Contact',
      component: Header
    }
  ]
})
