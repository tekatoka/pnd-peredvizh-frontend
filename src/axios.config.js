import axios from 'axios';
import config from './config';

// peredvizhUser

// post('http://{api base url}/auth/local', {
//   identifier: 'online@panda-platforma.berlin',
//   password: 'P!GpkjB%xkNG2x?wrbTf7QwfegWf',
// });

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3Mjc5NTcxLCJleHAiOjE2Mzk4NzE1NzF9.9TXKimPP5ose6sUN0lYGLcfbLVLoww5JCE3xGTuA2fc";

const instance = axios.create({
    baseURL: config.api.baseUrl,
    headers: {
      common: {
        Authorization: `Bearer ${jwt}`
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