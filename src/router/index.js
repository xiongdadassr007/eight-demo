import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import User from '@/views/menuChildren/User.vue'
import Right from '@/views/menuChildren/Right.vue'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    
    { path: '/', redirect: '/home' },
    { path: '/home', redirect: '/home/user' },
    {
        path: '/home', component: Home, children: [
            { path: '/home/user', component: User },
            { path: '/home/right', component: Right }
        ]

    },
]

const router = new VueRouter({
    routes
})

export default router
