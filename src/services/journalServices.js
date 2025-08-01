

const BASE_URL = "http://localhost:5050/api";

export const createJournal = async (form, token) => {
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("content", form.content);
  formData.append("mood", form.mood);
  if (form.image) formData.append("image", form.image);

  const response = await fetch(`${BASE_URL}/journals`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to create journal");

  return data;
};

// export const fetchAllJournals = async (token) => {
//   const response = await fetch("http://localhost:5050/api/journals", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || "Failed to fetch journals");
//   }
//   return data;
// };

export const fetchAllJournals = async (token) => {
  try {
    const response = await fetch("http://localhost:5050/api/journals", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch journals");
    }

    return data.journals; // ✅ return the actual array only
  } catch (err) {
    console.error("Error fetching journals:", err.message);
    throw err;
  }
};

// Fetch journal by ID
export const getJournalById = async (id, token) => {
  const res = await fetch(`http://localhost:5050/api/journals/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch journal");
  return res.json();
};

// Update journal
export const updateJournal = async (id, formData, token) => {
  const res = await fetch(`http://localhost:5050/api/journals/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to update journal");
  return res.json();
};

// for delete 
export const deleteJournal = async (id, token) => {
  const response = await fetch(`http://localhost:5050/api/journals/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete journal");
  }

  return await response.json();
};






