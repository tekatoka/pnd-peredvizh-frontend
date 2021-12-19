import axios from 'axios';
import baseUrl from './api-config';

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5OTIxODYzLCJleHAiOjE2NDI1MTM4NjN9.GBLxh4ykH5QkaRMJo3Q1-0EfcoiVak1ZVurHUpMYV5c";

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      common: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    }
  });

export default instance;








//!!!//
//https://strapi.io/documentation/developer-docs/latest/guides/auth-request.html#setup
// peredvizhUser

// post('http://{api base url}/auth/local', {
//   identifier: 'online@panda-platforma.berlin',
//   password: 'P!GpkjB%xkNG2x?wrbTf7QwfegWf',
// });


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