import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/components/Login')), 'Login');
//const Index = r => require.ensure([], () => r(require('@/components/Index')), 'Index');
const manage = r => require.ensure([], () => r(require('@/components/manage')), 'manage');
const pageone = r => require.ensure([], () => r(require('@/components/pageone')), 'pageone');
const pagetwo = r => require.ensure([], () => r(require('@/components/pagetwo')), 'pagetwo');
const supermanage = r => require.ensure([], () => r(require('@/components/supermanage')), 'supermanage');



export default new Router({
    routes: [{
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/manage',
            name: 'manage',
            component: manage,
            children: [{
                    path: '/pageone',
                    component: pageone,
                    meta: [],
                },
                {
                    path: '/pagetwo',
                    component: pagetwo,
                    meta: [],
                },
                {
                    path: '/supermanage',
                    component: supermanage,
                    meta: [],
                }
            ]
        }
    ]
})