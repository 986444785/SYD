import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
    },
    {
        path: '/detail',
        component: () => import('@/pages/detail/index.vue'),
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes,

});

// 全局路由拦截
router.beforeEach((to, from, next) => {

    console.log('全局路由拦截 ： from', from)

    if (to.meta.needAuthorize === true) {
    	console.log('需要授权 ')

    	//判断是否登录
    	if (localStorage.getItem('token')) {
    		console.log('有-----token')
    		next()
    	} else {
    		console.log('没有token')
    		next({
    			path: '/login',
    			query: {
    				orderPath: to.fullPath,
    				message: '这是携带的message参数'
    			}

    		})
    	}
    }

    next()

}

)


export default router