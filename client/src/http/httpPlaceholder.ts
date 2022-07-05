import axios from "axios";

const baseURL = "http://localhost:8080"
export const apiGet = axios.create({baseURL})
export const apiPost = axios.create({baseURL})
export const apiDelete = axios.create({baseURL})
export const apiPut = axios.create({baseURL})

apiGet.interceptors.request.use((config) => {
  config.method = "get";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiPost.interceptors.request.use((config) => {
  config.method = "post";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiDelete.interceptors.request.use((config) => {
  config.method = "delete";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiPut.interceptors.request.use((config) => {
  config.method = "put";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});
