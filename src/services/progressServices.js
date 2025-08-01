// src/services/progressService.js
import axios from "axios";

const API_BASE = "http://localhost:5050/api"; // replace with your actual backend base URL

export const fetchMeditations = async (token) => {
  const res = await axios.get(`${API_BASE}/meditations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchJournals = async (token) => {
  const res = await axios.get(`${API_BASE}/journals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchMoodData = async (token) => {
  const res = await axios.get(`${API_BASE}/mood`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
