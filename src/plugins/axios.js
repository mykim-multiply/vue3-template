import axios from "axios";
// import {useCookies} from "vue3-cookies";
// const {cookies} = useCookies();

// const API_URL = process.env.VUE_APP_API_URL
// console.log("API URL", API_URL);
const API_URL = "http://localhost:3000/api";
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // 'x-refresh-token':cookies.get('refreshToken'),
  },
  timeout: 3000,
});
instance.interceptors.request.use(
  (config) => {
    console.log(config, "axios.js request success");
    return config;
  },
  (err) => {
    console.log(err, "axios.js request error");
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  (res) => {
    console.log(res, "axios.js response success");
    return res;
  },
  (err) => {
    console.log(err, "axios.js request error");
    return Promise.reject(err);
  }
);
export default instance;
