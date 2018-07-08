import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
import About from '@/components/About'
import Intruduce from '@/components/Intruduce'

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/introduce',
      name: 'Intruduce',
      component: Intruduce
    },
  ]
})
