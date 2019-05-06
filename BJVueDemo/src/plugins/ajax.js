import axios from 'axios';
import { AXIOS_DEFAULT_CONFIG  } from '@/config/index';
// import { requestSuccess, requestFail, responseSuccess, responseFail } from '@config/interceptors/axios';

//配置默认值
axios.defaults.timeout = AXIOS_DEFAULT_CONFIG.timeout;
axios.defaults.baseURL = AXIOS_DEFAULT_CONFIG.baseURL;

// axios.interceptors.request.use(requestSuccess, requestFail);
// axios.interceptors.response.use(responseSuccess, responseFail);

export default {
  request(config) {
    return new Promise((resolve, reject) => {
      axios(config)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: params })
        .then(response => {
            console.log(response);
            
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};