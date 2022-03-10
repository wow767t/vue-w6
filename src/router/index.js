import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // 產品頁
  {
    path: '/products',
    component: () => import('../views/ProductsView.vue'),
  },
  // 購物車
  {
    path: '/cart',
    component: () => import('../views/CartView.vue'),
  },
  // Order
  {
    path: '/order',
    component: () => import('../views/OrderView.vue'),
  },
  // Admin
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/AdminView.vue'),
  },
  // Admin products
  {
    path: '/admin-products',
    component: () => import('../views/ProductsAdmin.vue'),
  },
  // Admin coupons
  {
    path: '/admin-coupons',
    component: () => import('../views/CouponsAdmin.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
