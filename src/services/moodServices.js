// src/services/moodServices.js
import api from "./api"; // Make sure this file exists

export const getMoods = async () => {
  const res = await api.get("/api/mood"); // Adjust path as per backend
  return res.data;
};

export const postMood = async (moodData) => {
  const res = await api.post("/api/mood", moodData);
  return res.data;
};