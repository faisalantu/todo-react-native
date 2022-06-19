import axios from "axios";
const baseUrl = "https://neko-todo-asp.herokuapp.com/api";
const baseUrl2 = "http://10.0.2.2:5000/api";

const instance = axios.create({
  baseURL: baseUrl2,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request...
// instance.interceptors.request.use(
//   (request) => {
//     // Edit request config
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       request.headers.common["authHeader"] = token;
//     }
//     //console.log("[request send-]",request);
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;