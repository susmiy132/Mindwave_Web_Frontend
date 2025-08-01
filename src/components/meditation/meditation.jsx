


import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useMeditations from "../../hooks/useMeditation";

const Meditation = () => {
  const token = localStorage.getItem("token");
  const {
    meditations,
    loading,
    error,
    addMeditation,
    editMeditation,
    removeMeditation,
  } = useMeditations(token);

  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    image: null,
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((f) => ({ ...f, image: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("You must be logged in");
      return;
    }

    const formPayload = {
      title: form.title,
      description: form.description,
      duration: form.duration,
      image: form.image,
    };

    try {
      if (editingId) {
        await editMeditation(editingId, formPayload);
        toast.success("Meditation updated!");
      } else {
        await addMeditation(formPayload);
        toast.success("Meditation created!");
      }
      setForm({ title: "", description: "", duration: "", image: null });
      setEditingId(null);
    } catch (err) {
      toast.error(err.message || "Failed to save meditation");
    }
  };

  const handleEdit = (meditation, e) => {
    e.stopPropagation();
    setEditingId(meditation._id);
    setForm({
      title: meditation.title,
      description: meditation.description,
      duration: meditation.duration || "",
      image: null,
    });
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm("Delete this meditation?")) return;
    try {
      await removeMeditation(id);
      toast.success("Meditation deleted!");
    } catch (err) {
      toast.error(err.message || "Failed to delete meditation");
    }
  };

  if (loading) return <p>Loading meditations...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10">
      <h2 className="text-2xl font-bold mb-4">🧘 Meditations</h2>

      <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
          className="p-2 border rounded"
          required
        />
        <input
          name="duration"
          type="number"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration (minutes)"
          className="p-2 border rounded"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          accept="image/*"
          className="p-2"
        />
        <button
          type="submit"
          className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
        >
          {editingId ? "Update Meditation" : "Create Meditation"}
        </button>
      </form>

      {meditations.length === 0 && <p>No meditations found.</p>}

      <div className="grid gap-6">
        {meditations.map((med) => (
          <div
            key={med._id}
            className="border rounded p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between cursor-pointer"
            onClick={() => navigate(`/meditation/${med._id}`)}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{med.title}</h3>
              <p className="text-gray-700">{med.description}</p>
              {med.duration && (
                <p className="text-sm text-gray-500">Duration: {med.duration} min</p>
              )}
              {med.image && (
                <img
                  src={`http://localhost:5050/uploads/${med.image}`}
                  alt={med.title}
                  className="mt-2 max-h-40 object-contain rounded"
                />
              )}
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <button
                onClick={(e) => handleEdit(med, e)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              {/* <button
                onClick={(e) => handleDelete(med._id, e)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meditation;
