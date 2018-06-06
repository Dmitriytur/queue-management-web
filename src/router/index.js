import Vue from 'vue'
import Router from 'vue-router'

import { requireAuth } from '@/utils/auth';

import Home from '@/components/Home';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';

import AdminProfile from "@/components/profile/admin/AdminProfile";
import Details from "@/components/profile/admin/Details";
import Structure from "@/components/profile/admin/Structure";
import Managers from "@/components/profile/admin/Managers";

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
    {
      path: '/admin',
      name: 'AdminProfile',
      component: AdminProfile,
      beforeEnter: requireAuth,
      children: [
        { path: '/', component: Details },
        { path: '/admin/structure', component: Structure },
        { path: '/admin/managers', component: Managers }
      ]
    },
  ],
});
