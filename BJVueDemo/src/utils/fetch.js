import axios from 'axios';
import { AXIOS_DEFAULT_CONFIG  } from '@/config/index';
// import { requestSuccess, requestFail, responseSuccess, responseFail } from '@config/interceptors/axios';

const service = axios.create(AXIOS_DEFAULT_CONFIG);

// service.interceptors.request.use(requestSuccess, requestFail);
// service.interceptors.response.use(responseSuccess, responseFail);

export default service;
