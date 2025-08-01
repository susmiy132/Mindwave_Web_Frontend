// const BASE_URL = "http://localhost:5050/api";

// // Create a new meditation (with optional image)
// export const createMeditation = async (form, token) => {
//   const formData = new FormData();
//   formData.append("title", form.title);
//   if (form.description) formData.append("description", form.description);
//   if (form.duration) formData.append("duration", form.duration);
//   if (form.image) formData.append("image", form.image);

//   const response = await fetch(`${BASE_URL}/meditations/add`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`, // Don't set Content-Type here; browser sets it automatically for FormData
//     },
//     body: formData,
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to create meditation");
//   }

//   return data;
// };

// // Get all meditations (public or token required if backend protected)
// export const getAllMeditations = async (token) => {
//   const headers = token
//     ? { Authorization: `Bearer ${token}`, Accept: "application/json" }
//     : { Accept: "application/json" };

//   const response = await fetch(`${BASE_URL}/meditations`, {
//     method: "GET",
//     headers,
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to fetch meditations");
//   }

//   return data.data || data.meditations || data; // adjust based on your backend response shape
// };

// // Get meditation by ID
// export const getMeditationById = async (id, token) => {
//   const headers = token
//     ? { Authorization: `Bearer ${token}`, Accept: "application/json" }
//     : { Accept: "application/json" };

//   const response = await fetch(`${BASE_URL}/meditations/${id}`, {
//     method: "GET",
//     headers,
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to fetch meditation");
//   }

//   return data.data || data;
// };

// // Update meditation by ID (with optional image)
// export const updateMeditation = async (id, form, token) => {
//   const formData = new FormData();
//   if (form.title) formData.append("title", form.title);
//   if (form.description) formData.append("description", form.description);
//   if (form.duration) formData.append("duration", form.duration);
//   if (form.image) formData.append("image", form.image);

//   const response = await fetch(`${BASE_URL}/meditations/${id}`, {
//     method: "PUT",
//     headers: {
//       Authorization: `Bearer ${token}`, // Don't set Content-Type for FormData
//     },
//     body: formData,
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to update meditation");
//   }

//   return data;
// };

// // Delete meditation by ID
// export const deleteMeditation = async (id, token) => {
//   const response = await fetch(`${BASE_URL}/meditations/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to delete meditation");
//   }

//   return data;
// };


const BASE_URL = "http://localhost:5050/api";

// Create a new meditation (with optional image)
export const createMeditation = async (form, token) => {
  const formData = new FormData();
  formData.append("title", form.title);
  if (form.description) formData.append("description", form.description);
  if (form.duration) formData.append("duration", form.duration);
  if (form.image) formData.append("image", form.image);

  const response = await fetch(`${BASE_URL}/meditations/add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`, // Don't set Content-Type; browser sets it for FormData
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create meditation");
  }

  return data;
};

// Get all meditations (public or token required)
export const getAllMeditations = async (token) => {
  const headers = token
    ? { Authorization: `Bearer ${token}`, Accept: "application/json" }
    : { Accept: "application/json" };

  const response = await fetch(`${BASE_URL}/meditations`, {
    method: "GET",
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch meditations");
  }

  return data.data || data.meditations || data;
};

// Get meditation by ID
export const getMeditationById = async (id, token) => {
  const headers = token
    ? { Authorization: `Bearer ${token}`, Accept: "application/json" }
    : { Accept: "application/json" };

  const response = await fetch(`${BASE_URL}/meditations/${id}`, {
    method: "GET",
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch meditation");
  }

  return data.data || data;
};

// // Update meditation by ID (with optional image)
// export const updateMeditation = async (id, form, token) => {
//   const formData = new FormData();
//   if (form.title) formData.append("title", form.title);
//   if (form.description) formData.append("description", form.description);
//   if (form.duration) formData.append("duration", form.duration);
//   if (form.image) formData.append("image", form.image);

//   const response = await fetch(`${BASE_URL}/meditations/${id}`, {
//     method: "PUT",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     body: formData,
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to update meditation");
//   }

//   return data;
// };

// // Delete meditation by ID
// export const deleteMeditation = async (id, token) => {
//   const response = await fetch(`${BASE_URL}/meditations/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to delete meditation");
//   }

//   return data;
// };
