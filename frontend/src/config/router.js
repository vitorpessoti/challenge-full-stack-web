import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/pages/auth/Login';
import Student from '@/components/pages/student/Student';
import StudentForm from '@/components/pages/student/StudentForm';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login,
        meta: { requireAuth: false }  
    },
    {
        name: 'Consulta de Alunos',
        path: '/alunos',
        component: Student,
        meta: {
            requireAuth: true,
            grantAll: true
        }
    },
    {
        name: 'Cadastro de Aluno',
        path: '/alunos-form',
        component: StudentForm,
        params: true,
        meta: {
            requireAuth: true,
            grantAll: true
        }
    }
];

const vueRouter = new VueRouter({
    mode: 'history',
    routes
});

vueRouter.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        const authToken = localStorage.getItem('__challenge_token');
        if (authToken && to.meta.grantAll) {
            next();
        } else {
                next({ name: 'Login' });
        }
    } else {
        next();
    }
});
export default vueRouter;