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

import ManagerProfile from "@/components/profile/manager/ManagerProfile";

import CompanyPage from '@/components/CompanyPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: LoginForm,
    },
    {
      path: '/register',
      component: RegisterForm,
    },
    {
      path: '/companies/:id',
      component: CompanyPage,
    },
    {
      path: '/admin',
      component: AdminProfile,
      beforeEnter: requireAuth,
      children: [
        { path: '', component: Details },
        { path: 'structure', component: Structure },
        { path: 'managers', component: Managers }
      ]
    },
    {
      path: '/manager',
      component: ManagerProfile,
    }
  ],
});
