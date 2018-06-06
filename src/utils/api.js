import axios from 'axios';
import { getId } from "@/utils/auth";

var BASE_URL = 'http://localhost:8085';

export default BASE_URL;


export function getManagersForActiveAdmin() {
  return axios.get(BASE_URL + "/users/" + getId() + "/company/managers");
}


export function addUser(user) {
  return axios.post(BASE_URL + "/users/sign-up", user);
}


export function getCompanyForUser() {
  return axios.get(BASE_URL + "/users/" + getId() + "/company");
}