const API_URL = "http://localhost:5050/api/meditations";

export const fetchMeditations = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch meditations");
  return res.json();
};

export const createMeditation = async (token, formData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to create meditation");
  }
  return res.json();
};

export const updateMeditation = async (token, id, formData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to update meditation");
  }
  return res.json();
};

export const deleteMeditation = async (token, id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to delete meditation");
  return res.json();
};
