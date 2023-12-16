import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import HomeView from '../views/HomeView.vue'
import author from '../views/Author.vue'
import MainPage from '../views/MainPage.vue'
import Contacts from '../views/Contacts.vue'
import Constructor from '../views/Constructor.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/authorization',
    name: 'Author',
    component: author
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/main-page',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
  },
  {
    path: '/home-view',
    name:'HomeView',
    component: HomeView,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/constructor',
    name: 'Constructor',
    component: Constructor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const isExitPage = from.path === '/game-run';
  if (isExitPage && to.path !== '/game-run') {
    const canvasElement = document.querySelector('#runner-canvas');
    if (canvasElement) {
      canvasElement.remove();
    }
  }
  next();
});


export default router
