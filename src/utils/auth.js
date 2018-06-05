import decode from 'jwt-decode';
import axios from 'axios';
import Router from '@/router/index';
const ACCESS_TOKEN_KEY = 'access_token';
const TOKEN_CLAIMS_KEY = 'token_claims';
const BASE_URL = 'http://localhost:8085';




export default function login(login, password) {
    return axios.post(BASE_URL+ '/login', {login: login, password: password}).then((response) => {
        setAccessToken(response.headers.authorization);
        Router.push('/profile');
    });
}

export function logout() {
  clearAccessToken();
  Router.push('register');
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRole() {
  return localStorage.getItem(TOKEN_CLAIMS_KEY).role;
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}


// Get and store access_token in local storage
export function setAccessToken(accessToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  const claims = decode(accessToken);
  localStorage.setItem(TOKEN_CLAIMS_KEY, claims);
  axios.defaults.headers.common['Authorization'] = accessToken;
}


export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
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