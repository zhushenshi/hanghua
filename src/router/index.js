import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
import About from '@/components/About'
import Intruduce from '@/components/Intruduce'
import New from '@/components/New'
import NewsDetail from '@/components/NewsDetail'
import Product from '@/components/Product'
import Case from '@/components/Case'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/header',
      name:'Header',
      component: Header
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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/introduce',
      name: 'Intruduce',
      component: Intruduce
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/newsDetails',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
  ]
})
