// import axios from "./api"

// export const registerUserApi = (data) => axios.post("/auth/register", data)
// export const loginUserApi = (data) => axios.post("/auth/login", data)


import axios from "./axios"; // uses the axios instance you created

export const registerUserApi = (data) => axios.post("/auth/register", data);
export const loginUserApi = (data) => axios.post("/auth/login", data);
export const fetchUserApi = () => axios.get("/auth/me"); // assuming you added this route
