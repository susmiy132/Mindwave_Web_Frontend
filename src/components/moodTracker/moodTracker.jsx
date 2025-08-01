// src/components/moodtracker.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) return toast.error("Please select your mood");

    const newEntry = {
      mood,
      date: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);
    setMood("");
    toast.success("Mood recorded!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10">
      <h2 className="text-xl font-semibold mb-4">😊 Mood Tracker</h2>

      <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select your mood</option>
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😢 Sad</option>
          <option value="Stressed">😫 Stressed</option>
          <option value="Excited">🤩 Excited</option>
          <option value="Calm">😌 Calm</option>
        </select>
        <button className="bg-purple-700 text-white py-2 rounded">Record Mood</button>
      </form>

      <div className="grid gap-4">
        {entries.map((entry, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            <p className="text-lg font-bold">Mood: {entry.mood}</p>
            <p className="text-gray-600 text-sm">{entry.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;


// // import React, { useState, useEffect } from "react";
// // import { toast } from "react-toastify";

// // const MoodTracker = () => {
// //   const [mood, setMood] = useState("");
// //   const [entries, setEntries] = useState([]);
// //   const token = localStorage.getItem("token"); // your stored JWT token

// //   // Fetch moods from backend on component load
// //   const fetchMoods = async () => {
// //     if (!token) return;
// //     try {
// //       const res = await fetch("http://localhost:5050/api/moods", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.message || "Failed to fetch moods");
// //       setEntries(data);
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchMoods();
// //   }, []);

// //   // Send new mood to backend
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!mood) return toast.error("Please select your mood");
// //     if (!token) return toast.error("You must be logged in to record mood");

// //     try {
// //       const res = await fetch("http://localhost:5050/api/moods", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ mood }),
// //       });

// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.message || "Failed to record mood");

// //       // Add new entry from backend response
// //       setEntries([data, ...entries]);
// //       setMood("");
// //       toast.success("Mood recorded!");
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   return (
// //     <div className="bg-white p-6 rounded-xl shadow mb-10">
// //       <h2 className="text-xl font-semibold mb-4">😊 Mood Tracker</h2>

// //       <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
// //         <select
// //           value={mood}
// //           onChange={(e) => setMood(e.target.value)}
// //           className="p-2 border rounded"
// //         >
// //           <option value="">Select your mood</option>
// //           <option value="Happy">😊 Happy</option>
// //           <option value="Sad">😢 Sad</option>
// //           <option value="Stressed">😫 Stressed</option>
// //           <option value="Excited">🤩 Excited</option>
// //           <option value="Calm">😌 Calm</option>
// //         </select>
// //         <button
// //           type="submit"
// //           className="bg-purple-700 text-white py-2 rounded"
// //         >
// //           Record Mood
// //         </button>
// //       </form>

// //       <div className="grid gap-4">
// //         {entries.map((entry) => (
// //           <div key={entry._id} className="border p-4 rounded shadow">
// //             <p className="text-lg font-bold">Mood: {entry.mood}</p>
// //             <p className="text-gray-600 text-sm">
// //               {new Date(entry.date).toLocaleString()}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MoodTracker;


// // src/components/moodTracker/MoodTracker.jsx
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { getMoods, postMood } from "../../services/moodServices";

// const MoodTracker = () => {
//   const [mood, setMood] = useState("");
//   const [entries, setEntries] = useState([]);

//   // 🔃 Fetch moods on mount
//   useEffect(() => {
//     fetchMoods();
//   }, []);

//   const fetchMoods = async () => {
//     try {
//       const data = await getMoods();
//       setEntries(data.reverse()); // newest first
//     } catch (error) {
//       toast.error("Failed to fetch moods");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!mood) return toast.error("Please select your mood");

//     try {
//       const newMood = await postMood({ mood });
//       toast.success("Mood recorded!");
//       setMood("");
//       setEntries([newMood, ...entries]);
//     } catch (error) {
//       toast.error("Failed to record mood");
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow mb-10">
//       <h2 className="text-xl font-semibold mb-4">😊 Mood Tracker</h2>

//       <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
//         <select
//           value={mood}
//           onChange={(e) => setMood(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="">Select your mood</option>
//           <option value="Happy">😊 Happy</option>
//           <option value="Sad">😢 Sad</option>
//           <option value="Stressed">😫 Stressed</option>
//           <option value="Excited">🤩 Excited</option>
//           <option value="Calm">😌 Calm</option>
//         </select>
//         <button className="bg-purple-700 text-white py-2 rounded">
//           Record Mood
//         </button>
//       </form>

//       <div className="grid gap-4">
//         {entries.map((entry, idx) => (
//           <div key={idx} className="border p-4 rounded shadow">
//             <p className="text-lg font-bold">Mood: {entry.mood}</p>
//             <p className="text-gray-600 text-sm">
//               {new Date(entry.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoodTracker;


// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { getMoods, postMood } from "../../services/moodServices";

// const MoodTracker = () => {
//   const [mood, setMood] = useState("");
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     fetchMoods();
//   }, []);

//   const fetchMoods = async () => {
//     try {
//       const data = await getMoods();
//       setEntries(data);
//     } catch (error) {
//       toast.error("Failed to fetch moods");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!mood) return toast.error("Please select your mood");

//     try {
//       const newMood = await postMood({ mood });
//       toast.success("Mood recorded!");
//       setMood("");
//       setEntries([newMood, ...entries]);
//     } catch (error) {
//       toast.error("Failed to record mood");
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow mb-10">
//       <h2 className="text-xl font-semibold mb-4">😊 Mood Tracker</h2>

//       <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
//         <select
//           value={mood}
//           onChange={(e) => setMood(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="">Select your mood</option>
//           <option value="Happy">😊 Happy</option>
//           <option value="Sad">😢 Sad</option>
//           <option value="Stressed">😫 Stressed</option>
//           <option value="Excited">🤩 Excited</option>
//           <option value="Calm">😌 Calm</option>
//         </select>
//         <button className="bg-purple-700 text-white py-2 rounded">
//           Record Mood
//         </button>
//       </form>

//       <div className="grid gap-4">
//         {entries.map((entry, idx) => (
//           <div key={idx} className="border p-4 rounded shadow">
//             <p className="text-lg font-bold">Mood: {entry.mood}</p>
//             <p className="text-gray-600 text-sm">
//               {new Date(entry.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoodTracker;
