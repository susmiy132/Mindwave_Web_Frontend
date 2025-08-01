// const BASE_URL = "http://localhost:5050/api";

// export const createNotice = async (data, token) => {
//   const response = await fetch(`${BASE_URL}/notices`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   const resData = await response.json();
//   if (!response.ok) throw new Error(resData.message || "Failed to create notice");

//   return resData;
// };

// export const fetchAllNotices = async (token) => {
//   const response = await fetch(`${BASE_URL}/notices`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const resData = await response.json();
//   if (!response.ok) throw new Error(resData.message || "Failed to fetch notices");

//   return resData.notices || resData; // adjust based on your backend response structure
// };

// export const getNoticeById = async (id, token) => {
//   const response = await fetch(`${BASE_URL}/notices/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) throw new Error("Failed to fetch notice");

//   return response.json();
// };

// export const updateNotice = async (id, data, token) => {
//   const response = await fetch(`${BASE_URL}/notices/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) throw new Error("Failed to update notice");

//   return response.json();
// };

// export const deleteNotice = async (id, token) => {
//   const response = await fetch(`${BASE_URL}/notices/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) throw new Error("Failed to delete notice");

//   return response.json();
// };
