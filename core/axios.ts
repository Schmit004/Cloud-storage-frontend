import axios from "axios";
import { parseCookies } from "nookies";

axios.defaults.baseURL = "http://localhost:7777";

axios.interceptors.request.use((config) => {
  console.log("Request config:", config);
  if (typeof window !== "undefined") {
    const { _token } = parseCookies();

    config.headers.Authorization = "Bearer " + _token;
  }

  return config;
});

export default axios;
