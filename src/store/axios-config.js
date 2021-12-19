import axios from "axios";
import baseUrl from "./api-config";

const TOKEN = "peredvizh-jwt-token";

const user = "online@panda-platforma.berlin";
const pw = "P!GpkjB%xkNG2x?wrbTf7QwfegWf";

//!!!//
//https://strapi.io/documentation/developer-docs/latest/guides/auth-request.html#setup
// peredvizhUser

// post('http://{api base url}/auth/local', {
//   identifier: 'online@panda-platforma.berlin',
//   password: 'P!GpkjB%xkNG2x?wrbTf7QwfegWf',
// });

const axiosApiInstance = axios.create({
  baseURL: baseUrl,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const jwt = localStorage.getItem(TOKEN);
    config.headers = {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const jwt = await refreshAccessToken();
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const body = {
    identifier: user,
    password: pw,
  };

  await axios
    .post(baseUrl + "/auth/local", body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const jwt = response.data.jwt;
      localStorage.setItem(TOKEN, jwt);
      return jwt;
    });
};

export default axiosApiInstance;
