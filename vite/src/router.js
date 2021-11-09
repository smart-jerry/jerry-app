import {  createRouter, createWebHashHistory } from 'vue-router';

/*
 * 1,定义路由组件--采用异步组件
 * 2，定义路由 routes
* */
const routes = [
	{ path: '/', name:'home', component: () => import('./pages/index/index.vue') },
	{ path: '/category', name:'category', component: () => import('./pages/category/index.vue') },
	{ path: '/carts', name:'carts', component: () => import('./pages/carts/index.vue') },
	{ path: '/account', name:'account', component: () => import('./pages/account/index.vue') },
]
// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
	// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes,
});

export default router;