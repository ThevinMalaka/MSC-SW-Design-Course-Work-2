import axios from 'axios';
import ApiConstants from './ApiConstants';
// import Constants from '../../lib/Constants';
// import {
//   userAgent,
//   getToken,
//   getRefreshToken,
//   getBearerToken,
// } from '../../../utils/store.utils';

const apiInstance = axios.create({
  baseURL: ApiConstants.BASE_URL,
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5000',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    cache: 'no-cache',
    mode: 'cors',
    redirect: 'follow',
    // 'x-user-agent': userAgent(),
    'x-user-agent': 'test',
    referrer: 'no-referrer',
    // accessthrough: Constants.ACCESS_THROUGH,
  },
});

apiInstance.interceptors.request.use(
  async function (config) {
    // const refreshToken = await getRefreshToken();
    // const token = await getBearerToken();
    const refreshToken = 'test token';
    const token = 'test token';
    config.headers = {
      ...config.headers,
      Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzYzMTUxNTUsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.tDUti-OuKo-Qaftbe1PLpoEmHohiq2kVctHOXZw7NVc`,
      refreshToken: refreshToken,
    };
    if (!config.headers.Authorization) {
      delete config.headers.Authorization;
    }
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default apiInstance;
