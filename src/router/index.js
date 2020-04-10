import firebase from 'firebase/app'
import 'firebase/auth'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile'
import BookView from '../views/Book'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'  // for regular page of searching and surfing nobo.mn experiences
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/:id',
    component: BookView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    redirect: '/404'
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  },

]

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  

  if(!to.matched.length) { 
    next({name: 'NotFound'});
  } else if (requiresAuth && !currentUser) next('login');
  else if(requiresAuth && currentUser) next();
  else {
    next();
  }
});

export default router
