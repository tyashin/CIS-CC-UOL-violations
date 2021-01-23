import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AboutView',
    component: AboutView,
    meta: { title: 'About' }
  },
  {
    path: '/board',
    name: 'KanbanBoardView',
    component: () => import('../views/KanbanBoardView.vue'),
    meta: { title: 'Kanban board' }
  },
  {
    path: '/cases',
    name: 'CasesListView',
    component: () => import('../views/CasesListView.vue'),
    meta: { title: 'List of cases' }
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact us' }
  },
  {
    path: '/contribute',
    name: 'ContributeView',
    component: () => import('../views/ContributeView.vue'),
    meta: { title: 'How to contribute' }
  }
]

const router = new VueRouter({
  routes
})

const DEFAULT_TITLE = 'UOL violations tracker'
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router
