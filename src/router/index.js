import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/header',
      name: 'Header',
      component: Header
    },
	{
      path: '/footer',
      name: 'Footer',
      component: Footer
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
    }
  ]
})
