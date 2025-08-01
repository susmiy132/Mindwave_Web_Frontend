import { useState, useEffect } from "react";
import {
  fetchMeditations,
  createMeditation,
  updateMeditation,
  deleteMeditation,
} from "../../services/meditationServices/meditationService";

export const useMeditations = (token) => {
  const [meditations, setMeditations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all meditations
  const loadMeditations = async () => {
    setLoading(true);
    try {
      const data = await fetchMeditations();
      setMeditations(data.data || []);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create meditation
  const addMeditation = async (formData) => {
    setLoading(true);
    try {
      await createMeditation(token, formData);
      await loadMeditations();
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err; // Let component handle too
    } finally {
      setLoading(false);
    }
  };

  // Update meditation
  const editMeditation = async (id, formData) => {
    setLoading(true);
    try {
      await updateMeditation(token, id, formData);
      await loadMeditations();
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete meditation
  const removeMeditation = async (id) => {
    setLoading(true);
    try {
      await deleteMeditation(token, id);
      await loadMeditations();
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // On mount fetch meditations
  useEffect(() => {
    loadMeditations();
  }, []);

  return {
    meditations,
    loading,
    error,
    addMeditation,
    editMeditation,
    removeMeditation,
  };
};
