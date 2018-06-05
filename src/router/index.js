import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
  ],
});
