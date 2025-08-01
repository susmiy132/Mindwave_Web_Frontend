import { useState, useEffect } from "react";
import { recordMood, fetchMoods } from "../services/moodServices";

const useMoodTracker = (token) => {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch moods from backend
  const loadMoods = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMoods(token);
      setMoods(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Record new mood and reload moods list
  const addMood = async (mood) => {
    setLoading(true);
    setError(null);
    try {
      await recordMood(mood, token);
      await loadMoods();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) loadMoods();
  }, [token]);

  return {
    moods,
    loading,
    error,
    addMood,
    loadMoods,
  };
};

export default useMoodTracker;
