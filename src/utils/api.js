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
  return axios.get(url);
}

export function assignClient(sloteId, phoneNumber, details) {
  return axios.put(BASE_URL + "/time-slots/" + sloteId, { phone: phoneNumber, details: details });
}

export function addQueue(queue) {
  queue.managerId = getId();
  return axios.post(BASE_URL + "/queues", queue);
}


export function sendNotification(queueId, message) {
  return axios.post(BASE_URL + "/queues/" + queueId + "/notifications", message, { headers: { "Content-Type": "text/plain" } });
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


export function getUserByToken(tokenId) {
  return axios.get(BASE_URL + "/register-tokens/" + tokenId + "/user");
}

export function registerByToken(tokenId, password) {
  return axios.put(BASE_URL + "/register-tokens/" + tokenId, password, { headers: { "Content-Type": "text/plain" } });
}