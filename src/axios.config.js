import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: config.api.baseUrl,
    headers: {
      common: {
        //Authorization: 'AUTH_TOKEN_FROM_INSTANCE'
      }
    }
  });

// instance.interceptors.request.use(
//     function(config) {
//       const token = localStorage.getItem("peredvizh-token");
//       if (token) {
//         config.headers["Authorization"] = 'Bearer ' + token;
//       }
//       return config;
//     },
//     function(error) {
//       return Promise.reject(error);
//     }
//   );

export default instance;