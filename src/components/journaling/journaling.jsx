
import React, { useState } from "react";
import { toast } from "react-toastify";
import useJournals from "../../hooks/usejournals";
import { createJournal } from "../../services/journalServices";
import { useNavigate } from "react-router-dom";

const Journaling = () => {
  const { journals, loading, error, reload } = useJournals();
  const [form, setForm] = useState({
    title: "",
    content: "",
    mood: "",
    image: null,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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

    try {
      await createJournal(form, token);
      toast.success("Journal created successfully!");
      setForm({ title: "", content: "", mood: "", image: null });
      await reload();
      navigate("/save-journal");
    } catch (err) {
      toast.error(err.message || "Failed to create journal");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10">
      
      <h2 className="text-2xl font-bold mb-4">Create Journal</h2>
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
        >
          Create Journal
        </button>
      </form>
      
      <div className="mt-6">
        <button
          className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          onClick={() => navigate("/save-journal")}  // or a general page showing saved journals
        >
  ✏️    Your Journals
        </button>

      </div>

      {/* <div className="mt-6">
        <button
          className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          onClick={() => navigate(`/edit-journal/${j._id}`)}
        >
          ✏️ Edit Journals
        </button>
      </div > */}

      {/* Edit Dropdown Section BELOW the button */}
      <div className="mt-6">
        <button
          className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          ✏️ Your Journals 
        </button>

        {dropdownOpen && (
          <div className="mt-2 w-full max-w-md bg-white border shadow-md rounded z-10">
            <div className="p-2 text-sm font-semibold border-b">Your Journals</div>
            <div className="max-h-48 overflow-y-auto">
              {loading ? (
                <p className="p-2 text-sm">Loading...</p>
              ) : journals.length > 0 ? (
                journals.map((j) => (
                  <div
                    key={j._id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => navigate(`/edit-journal/${j._id}`)}
                  >
                    {j.title}
                  </div>
                ))
              ) : (
                <p className="p-2 text-sm text-gray-500">No journals found</p>
              )}
            </div>
            {/* <button
              onClick={() => navigate("/edit-journals")}
              className="w-full text-left px-4 py-2 text-sm bg-purple-600 text-white hover:bg-purple-700 rounded-b"
            >
              ✏️ Edit Your Journals
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Journaling;
