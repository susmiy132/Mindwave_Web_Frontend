// // import axios from 'axios';

// // const api = axios.create({
// //   baseURL: 'http://localhost:5000/api', // or whatever your backend URL is
// //   withCredentials: true,
// // });

// // export default api;

// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5050/api"; // fixed missing http

// const instance = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ✅ Attach token to every request
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`; // ✅ Fix: Authorixation -> Authorization and space after Bearer
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default instance;
