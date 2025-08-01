
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJournalById, updateJournal } from "../../services/journalServices";
import { toast } from "react-toastify";

// const UpdateJournal = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const [form, setForm] = useState({
//     title: "",
//     content: "",
//     mood: "",
//     image: null,
//   });
//   const [loading, setLoading] = useState(false);

//   // Load journal on mount
//   useEffect(() => {
//     const fetchJournal = async () => {
//       try {
//         const data = await getJournalById(id, token);
//         setForm({
//           title: data.title || "",
//           content: data.content || "",
//           mood: data.mood || "",
//           image: null,
//         });
//       } catch (error) {
//         toast.error("Failed to fetch journal");
//       }
//     };
//     fetchJournal();
//   }, [id, token]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setForm((prev) => ({ ...prev, image: files[0] }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) {
//       toast.error("You must be logged in");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", form.title);
//     formData.append("content", form.content);
//     formData.append("mood", form.mood);
//     if (form.image) formData.append("image", form.image);

//     try {
//       setLoading(true);
//       await updateJournal(id, formData, token);
//       toast.success("Journal updated!");
//       navigate("/save-journal");
//     } catch (err) {
//       toast.error("Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10">
      <h2 className="text-2xl font-bold mb-4">Edit Journal</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-2 border rounded"
          required
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          className="p-2 border rounded"
          rows={4}
          required
        />
        <input
          name="mood"
          value={form.mood}
          onChange={handleChange}
          placeholder="Mood (optional)"
          className="p-2 border rounded"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="p-2"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Journal"}
        </button>
      </form>
    </div>
  );
};

export default UpdateJournal;
