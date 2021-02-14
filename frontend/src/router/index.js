import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutView from '../views/AboutView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AboutView',
    component: AboutView,
    meta: { title: 'About' },
  },
  {
    path: '/board',
    name: 'KanbanBoardView',
    component: () => import('../views/KanbanBoardView.vue'),
    meta: { title: 'Kanban board' },
  },
  {
    path: '/single-case/:caseId',
    name: 'SingleCaseView',
    component: () => import('../views/SingleCaseView.vue'),
    meta: { title: 'Case' },
  },

  {
    path: '/list-of-cases',
    name: 'CasesListView',
    component: () => import('../views/CasesListView.vue'),
    meta: { title: 'List of cases' },
  },
  {
    path: '/contribute',
    name: 'ContributeView',
    component: () => import('../views/ContributeView.vue'),
    meta: { title: 'How to contribute' },
  },
  {
    path: '*',
    name: 'Page404',
    component: () => import('../views/Page404.vue'),
    meta: { title: 'Page not found' },
  },

];

const router = new VueRouter({
  routes,
});

const DEFAULT_TITLE = 'UOL violations tracker';
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
