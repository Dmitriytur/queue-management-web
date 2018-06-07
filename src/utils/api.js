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
    path: 'queues',
    queryParams: {
      categoryId: categoryId,
      startDate: startDate,
      endDate: endDate
    }
  });
  console.log(url);
  return axios.get(url);
}

export function getQueuesByCategoryAndManager(categoryId, startDate, endDate) {
  var url = buildUrl(BASE_URL, {
    path: 'queues',
    queryParams: {
      categoryId: categoryId,
      startDate: startDate,
      endDate: endDate,
      managerId: getId()
    }
  });
  console.log(url);
  return axios.get(url);
}

export function assignClient(sloteId, phoneNumber, details) {
  return axios.put(BASE_URL + "/time-slots/" + sloteId, { phone: phoneNumber, details: details });
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