import { useState, useEffect } from "react";
import { fetchNotices, createNotice, deleteNotice, updateNotice } from "../services/noticeServices";

export const useNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load notices on mount
  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetchNotices();
      setNotices(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load notices");
    }
    setLoading(false);
  };

  const addNotice = async (noticeData) => {
    setError("");
    try {
      const response = await createNotice(noticeData);
      // Append new notice to current list
      setNotices((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create notice");
      throw err;
    }
  };

  const removeNotice = async (id) => {
    setError("");
    try {
      await deleteNotice(id);
      setNotices((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete notice");
      throw err;
    }
  };

  const editNotice = async (id, data) => {
    setError("");
    try {
      const response = await updateNotice(id, data);
      setNotices((prev) =>
        prev.map((n) => (n._id === id ? response.data : n))
      );
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update notice");
      throw err;
    }
  };

  return {
    notices,
    loading,
    error,
    loadNotices,
    addNotice,
    removeNotice,
    editNotice,
  };
};
