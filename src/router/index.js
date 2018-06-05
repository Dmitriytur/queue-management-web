import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import CompanyPage from '@/components/CompanyPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm,
    },
    {
      path: '/register',
      name: 'RegisterForm',
      component: RegisterForm,
    },
    {
      path: '/companies/:id',
      name: 'CompanyPage',
      component: CompanyPage,
    },
  ],
});
