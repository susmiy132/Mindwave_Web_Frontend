

import React, { useEffect, useState } from "react";
import { fetchAllJournals, deleteJournal } from "../../services/journalServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// const SaveJournalPage = () => {
//   const [journals, setJournals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

  // const loadJournals = async () => {
  //   try {
  //     const response = await fetchAllJournals(token);
  //     if (Array.isArray(response)) {
  //       setJournals(response);
  //     } else {
  //       throw new Error("Invalid data format from server");
  //     }
  //   } catch (err) {
  //     console.error("Failed to fetch journals:", err);
  //     setError("Failed to fetch journal entries.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadJournals();
  // }, [token]);

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteJournal(id, token);
  //     toast.success("Journal deleted successfully!");
  //     loadJournals(); // Reload list
  //   } catch (err) {
  //     console.error("Delete failed:", err);
  //     toast.error("Failed to delete journal.");
  //   }
  // };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">
        Your Journal Entries
      </h2>

      {journals.length === 0 ? (
        <p>No journals found.</p>
      ) : (
        journals.map((entry) => (
          <div key={entry._id} className="border-b pb-4 mb-6">
            <p><strong>Title:</strong> {entry.title}</p>
            <p><strong>Content:</strong> {entry.content}</p>
            {entry.mood && <p><strong>Mood:</strong> {entry.mood}</p>}
            {entry.image && (
              <img
                src={`http://localhost:5050/uploads/${entry.image}`}
                alt="Journal"
                className="rounded mt-2 max-h-48 object-cover"
              />
            )}

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => navigate(`/update-journal/${entry._id}`)}
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                ✏️ Update
              </button>
              {/* <button
                onClick={() => handleDelete(entry._id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                🗑️ Delete
              </button> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SaveJournalPage;
