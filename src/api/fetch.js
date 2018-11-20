import axios from 'axios';
import { Message } from 'element-ui';

const Axios = axios.create({
  timeout: 10000,
  responseType: 'json'
});

Axios.interceptors.request.use(
  (/* config */) => {

  },
  (error) => {
    Message({
      showClose: true,
      message: error && error.data.error.message,
      type: 'error'
    });
    console.log(error);
    return Promise.reject(error.data.error.message);
  }
);

Axios.interceptors.response.use(
  res => res.data,
  error => error
);

export default Axios;
