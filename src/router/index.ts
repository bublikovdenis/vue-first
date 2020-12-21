import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue'),
    children: [
      {
        path: 'portraits',
        name: 'gallery-portraits',
        component: () => import('../views/gallery/Portraits.vue'),
      },
      {
        path: 'other',
        name: 'gallery-other',
        component: () => import('../views/gallery/Other.vue'),
      }],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
