// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {
//   // Sample CRUD state for "Meditations" (you can replace with your real data/API)
//   const [meditations, setMeditations] = useState([
//     { id: 1, title: "Morning Calm", image: null },
//     { id: 2, title: "Evening Relaxation", image: null },
//   ]);
//   const [newTitle, setNewTitle] = useState("");
//   const [newImage, setNewImage] = useState(null);

//   const handleAddMeditation = () => {
//     if (!newTitle) return alert("Please enter title");
//     const newMeditation = {
//       id: Date.now(),
//       title: newTitle,
//       image: newImage ? URL.createObjectURL(newImage) : null,
//     };
//     setMeditations((prev) => [...prev, newMeditation]);
//     setNewTitle("");
//     setNewImage(null);
//   };

//   const handleDelete = (id) => {
//     setMeditations((prev) => prev.filter((m) => m.id !== id));
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <nav className="w-64 bg-blue-800 text-white p-6">
//         <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
//         <ul>
//           <li className="mb-4 cursor-pointer hover:underline">Dashboard Home</li>
//           <li className="mb-4 cursor-pointer hover:underline">Manage Meditations</li>
//           <li className="mb-4 cursor-pointer hover:underline">Manage Journaling</li>
//           <li className="mb-4 cursor-pointer hover:underline">Users</li>
//           <li className="mb-4 cursor-pointer hover:underline">Settings</li>
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <h1 className="text-3xl font-semibold mb-8">Manage Meditations</h1>

//         {/* Add Meditation Form */}
//         <div className="mb-8 bg-white p-6 rounded shadow">
//           <h3 className="text-xl mb-4">Add New Meditation</h3>
//           <input
//             type="text"
//             placeholder="Title"
//             className="border p-2 w-full mb-4"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setNewImage(e.target.files[0])}
//             className="mb-4"
//           />
//           <button
//             onClick={handleAddMeditation}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Add Meditation
//           </button>
//         </div>

//         {/* Meditation List */}
//         <div className="bg-white p-6 rounded shadow">
//           <h3 className="text-xl mb-4">Meditations List</h3>
//           {meditations.length === 0 ? (
//             <p>No meditations available.</p>
//           ) : (
//             <ul>
//               {meditations.map(({ id, title, image }) => (
//                 <li
//                   key={id}
//                   className="flex items-center justify-between border-b py-2"
//                 >
//                   <div className="flex items-center space-x-4">
//                     {image && (
//                       <img
//                         src={image}
//                         alt={title}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     )}
//                     <span>{title}</span>
//                   </div>
//                   <button
//                     onClick={() => handleDelete(id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* You can add another CRUD section for Journaling below similarly */}
//       </main>
//     </div>
//   );
// }

// export default AdminDashboard;
