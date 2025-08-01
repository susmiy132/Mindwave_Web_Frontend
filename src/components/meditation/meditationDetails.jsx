// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const API_URL = "http://localhost:5050/api/meditations";

// const MeditationDetails = () => {
//   const { id } = useParams(); // get id from URL
//   const navigate = useNavigate();
//   const [meditation, setMeditation] = useState(null);

//   useEffect(() => {
//     fetchMeditation();
//   }, [id]);

//   const fetchMeditation = async () => {
//     try {
//       const res = await fetch(`${API_URL}/${id}`);
//       const data = await res.json();
//       if (data.success) {
//         setMeditation(data.data);
//       } else {
//         toast.error("Meditation not found");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error fetching meditation");
//     }
//   };

//   if (!meditation) return <p>Loading...</p>;

//   return (
//     <div className="p-6 bg-white rounded-xl shadow max-w-3xl mx-auto mt-8">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 text-blue-600 hover:underline"
//       >
//         ← Back
//       </button>

//       <h2 className="text-3xl font-bold mb-4">{meditation.title}</h2>
//       <p className="mb-4">{meditation.description}</p>
//       {meditation.image && (
//         <img
//           src={`http://localhost:5050/uploads/${meditation.image}`}
//           alt={meditation.title}
//           className="max-w-full rounded"
//         />
//       )}
//     </div>
//   );
// };

// export default MeditationDetails;
