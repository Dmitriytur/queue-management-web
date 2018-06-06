import decode from 'jwt-decode';
import axios from 'axios';
import Router from '@/router/index';
import EventBus from '@/utils/event-bus';
const ACCESS_TOKEN_KEY = 'access_token';
const TOKEN_ID_KEY = 'token_id';
const TOKEN_ROLE_KEY = 'token_role';
const TOKEN_SUB_KEY = 'token_sub';
const BASE_URL = 'http://localhost:8085';

axios.defaults.headers.common['Authorization'] = getAccessToken();


export default function login(login, password) {
  return axios.post(BASE_URL + '/login', { login: login, password: password }).then((response) => {
    setAccessToken(response.headers.authorization);
    EventBus.$emit('loggedIn');
    goToProfile();
  });
}

export function logout() {
  clearAccessToken();
  Router.push('/');
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getId() {
  return localStorage.getItem(TOKEN_ID_KEY);
}

export function getRole() {
  return localStorage.getItem(TOKEN_ROLE_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}


// Get and store access_token in local storage
export function setAccessToken(accessToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  var claims = decode(accessToken);
  localStorage.setItem(TOKEN_ID_KEY, claims.id);
  localStorage.setItem(TOKEN_SUB_KEY, claims.sub);
  localStorage.setItem(TOKEN_ROLE_KEY, claims.role);
  axios.defaults.headers.common['Authorization'] = accessToken;
}


export function isLoggedIn() {
  const token = getAccessToken();
  return !!token && !isTokenExpired(token);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function goToProfile() {
  var role = getRole();
  var profilePath = "/"
  switch (role) {
    case "ADMIN": {
      profilePath = "/admin"
      break;
    }
    case "MANAGER": {
      profilePath = "/manager"
      break;
    }
    case "CLIENT": {
      profilePath = "/client"
      break;
    }
  }
  Router.push(profilePath);
}