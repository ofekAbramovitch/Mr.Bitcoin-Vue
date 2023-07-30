import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "../views/home.vue"
import ContactIndex from "../views/contact-index.vue"
import ContactDetails from "../views/contact-details.vue"
import ContactEdit from "../views/contact-edit.vue"
import Stats from "../views/stats.vue"

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: ContactIndex
    },
    {
      path: '/contact/:_id',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:_id?',
      component: ContactEdit
    },
    {
      path: '/stats',
      component: Stats
    }
  ]
}

const router = createRouter(routerOptions)

export default router
