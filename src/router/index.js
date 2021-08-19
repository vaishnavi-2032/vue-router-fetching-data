import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/jobs.vue'
import Jobdetails from '../views/jobs/jobdetails.vue'
import NotFound from '../views/notfound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
    
  },
  {
    path: '/jobs/:id',
    name: 'Jobdetails',
    component: Jobdetails,
    props:true
    
  },

  //redirect user from all-jobs route to job route
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  //catch all 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
