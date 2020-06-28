import axios from 'axios';

export default class baseAPIService {
  constructor(baseUrl = '/') {
    this.baseUrl = baseUrl;
  }

  request({ path, method = 'GET', params = {}, data = {}, headers = {} }) {
    const url = this.baseUrl + path;
    return axios({
      url,
      baseURL: this.baseUrl,
      method,
      params,
      data,
      headers
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw new Error(err);
    })
  }

  async GET(path, params = {}, headers = {}) {
    return this.request({
      path,
      params,
      headers,
      method: 'GET',
    });
  }

  async POST(path, body = {}, headers = {}) {
    return this.request({
      path,
      headers,
      data: body,
      method: 'POST'
    });
  }

  async PUT(path, body = {}, headers = {}) {
    return this.request({
      path,
      headers,
      data: body,
      method: 'PUT'
    });
  }

  async DELETE(path, params = {}, headers = {}) {
    return this.request({
      path,
      params,
      headers,
      method: 'DELETE',
    });
  }
}