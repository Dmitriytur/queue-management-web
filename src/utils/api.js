import axios from 'axios';
import { getId } from "@/utils/auth";
import buildUrl from 'build-url';

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

export function getQueuesByCategory(categoryId, startDate, endDate) {
  var url = buildUrl(BASE_URL, {
    path: 'queue',
    queryParams: {
      categoryId: categoryId,
      startDate: startDate,
      endDate: endDate
    }
  });
  console.log(url);
  return axios.get(url);
}

export function convertNode(categoryNode) {
  if (!categoryNode) {
    return {}
  }
  var children = [];
  if (categoryNode.options) {
    var children = categoryNode.options.map(o => convertNode(o));
  }
  return {
    id: categoryNode.id,
    label: categoryNode.value,
    children: children
  }
}