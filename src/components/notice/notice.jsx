// // // src/pages/Settings.jsx
// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const Notices = () => {

// //   const navigate = useNavigate();
  
// //   return (
// //     <div className="bg-white p-6 rounded-xl shadow mb-10">
      

// //     </div>
    
// //   );
// // };

// // export default Notices;

// import { useState } from "react";
// import axios from "axios";

// const Notices = () => {
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!message.trim()) {
//       setError("Message is required");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token"); // If your backend needs auth token

//       const res = await axios.post(
//         "http://localhost:5050/api/notices", // replace with your actual backend URL
//         { message },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // send token if required
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setSuccess("Notice created successfully!");
//       setMessage("");
//     } catch (err) {
//       console.error(err);
//       setError(
//         err.response?.data?.message ||
//           "Failed to create notice. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow mb-10">
//       <h2>Create Notice</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: 10 }}>
//           <label>
//             Message:
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               rows={4}
//               style={{ width: "100%" }}
//               required
//             />
//           </label>
//         </div>
//         <button type="submit">Submit Notice</button>
//       </form>

//       {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
//       {success && <p style={{ color: "green", marginTop: 10 }}>{success}</p>}
//     </div>
//   );
// };

// export default Notices;

import { useEffect, useState } from "react";
import { fetchAllNotices } from "../../services/noticeServices"; // adjust path as needed

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Assume token is stored in localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadNotices = async () => {
      try {
        const data = await fetchAllNotices(token);
        setNotices(data);
      } catch (err) {
        setError(err.message || "Failed to load notices");
      } finally {
        setLoading(false);
      }
    };

    loadNotices();
  }, [token]);

  if (loading) return <div>Loading notices...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6 text-center">
      <h2>Notices</h2>
      {notices.length === 0 ? (
        <p>No notices found.</p>
      ) : (
        <ul>
          {notices.map((notice) => (
            <li key={notice._id}>
              <strong>{notice.message}</strong>
              <br />
              <small>{new Date(notice.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notices;
