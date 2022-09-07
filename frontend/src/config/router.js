import Vue from 'vue';
import VueRouter from 'vue-router';
import Student from '@/components/Student';
import StudentForm from '@/components/StudentForm';

Vue.use(VueRouter);

const routes = [
    {
        name: 'alunos',
        path: '/alunos',
        component: Student
    },
    {
        name: 'alunos-form',
        path: '/alunos-form',
        component: StudentForm
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});