// import {registerUserApi} from "../api/authApi";

// export const registerUserService = async (fromData) => {
//     try{
//         const response = await registerUserApi(fromData)
//         return response.data    //body of response
//     }catch(err){
//         throw err.response?.data || {message: "Registration failed"}
//     }
// };

// export const fetchUserProfile = async (token) => {
//   try {
//     const response = await axios.get("http://localhost:5050/api/auth/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data.user; // return just the user object
//   } catch (error) {
//     throw error.response?.data || { message: "Failed to fetch user profile" };
//   }
// };

import { registerUserApi, loginUserApi, fetchUserApi } from "../api/authApi";

export const registerUserService = async (formData) => {
  try {
    const response = await registerUserApi(formData);
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Registration failed" };
  }
};

// export const loginUserService = async (formData) => {
//   try {
//     const response = await loginUserApi(formData);
//     return response.data;
//   } catch (err) {
//     throw err.response?.data || { message: "Login failed" };
//   }
// };

// export const fetchUserProfile = async () => {
//   try {
//     const response = await fetchUserApi();
//     return response.data; // your backend should return user info
//   } catch (err) {
//     throw err.response?.data || { message: "Failed to fetch user profile" };
//   }
// };
