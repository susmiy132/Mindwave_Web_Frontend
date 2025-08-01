// // // import { useState, useEffect } from "react";
// // // import {
// // //   getAllMeditations,
// // //   getMeditationById,
// // //   createMeditation,
// // //   updateMeditation,
// // //   deleteMeditation,
// // // } from "../services/meditationServices";

// // // export const useMeditations = () => {
// // //   const [meditations, setMeditations] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   const fetchMeditations = async () => {
// // //     try {
// // //       const res = await getAllMeditations();
// // //       setMeditations(res.data.data);
// // //     } catch (error) {
// // //       console.error("Error loading meditations:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const addMeditation = async (formData) => {
// // //     return await createMeditation(formData);
// // //   };

// // //   const editMeditation = async (id, formData) => {
// // //     return await updateMeditation(id, formData);
// // //   };

// // //   const removeMeditation = async (id) => {
// // //     await deleteMeditation(id);
// // //     setMeditations((prev) => prev.filter((item) => item._id !== id));
// // //   };

// // //   useEffect(() => {
// // //     fetchMeditations();
// // //   }, []);

// // //   return {
// // //     meditations,
// // //     loading,
// // //     fetchMeditations,
// // //     addMeditation,
// // //     editMeditation,
// // //     removeMeditation,
// // //   };
// // // };

// // import { useState, useEffect } from "react";
// // import {
// //   getAllMeditations,
// //   createMeditation,
// //   updateMeditation,
// //   deleteMeditation,
// //   getMeditationById,
// // } from "../services/meditationServices";

// // const useMeditations = (token) => {
// //   const [meditations, setMeditations] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // Fetch all meditations
// //   const fetchMeditations = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const data = await getAllMeditations(token);
// //       setMeditations(data);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //     setLoading(false);
// //   };

// //   // Create new meditation
// //   const addMeditation = async (form) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const newMeditation = await createMeditation(form, token);
// //       setMeditations((prev) => [newMeditation.data || newMeditation, ...prev]);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //     setLoading(false);
// //   };

// //   // Update meditation by ID
// //   const editMeditation = async (id, form) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const updatedMeditation = await updateMeditation(id, form, token);
// //       setMeditations((prev) =>
// //         prev.map((med) => (med._id === id ? updatedMeditation.data || updatedMeditation : med))
// //       );
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //     setLoading(false);
// //   };

// //   // Delete meditation by ID
// //   const removeMeditation = async (id) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       await deleteMeditation(id, token);
// //       setMeditations((prev) => prev.filter((med) => med._id !== id));
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //     setLoading(false);
// //   };

// //   // Fetch one meditation by ID (optional helper)
// //   const fetchMeditation = async (id) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const meditation = await getMeditationById(id, token);
// //       setLoading(false);
// //       return meditation.data || meditation;
// //     } catch (err) {
// //       setError(err.message);
// //       setLoading(false);
// //       return null;
// //     }
// //   };

// //   useEffect(() => {
// //     if (token) {
// //       fetchMeditations();
// //     }
// //   }, [token]);

// //   return {
// //     meditations,
// //     loading,
// //     error,
// //     fetchMeditations,
// //     addMeditation,
// //     editMeditation,
// //     removeMeditation,
// //     fetchMeditation,
// //   };
// // };

// // export default useMeditations;


// import { useState, useEffect } from "react";
// import {
//   getAllMeditations,
//   createMeditation,
//   updateMeditation,
//   deleteMeditation,
//   getMeditationById,
// } from "../services/meditationServices";

// const useMeditations = (token) => {
//   const [meditations, setMeditations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch all meditations
//   const fetchMeditations = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const data = await getAllMeditations(token);
//       setMeditations(data);
//     } catch (err) {
//       setError(err.message);
//     }
//     setLoading(false);
//   };

//   // Create new meditation
//   const addMeditation = async (form) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const newMeditation = await createMeditation(form, token);
//       setMeditations((prev) => [newMeditation.data || newMeditation, ...prev]);
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update meditation by ID
//   const editMeditation = async (id, form) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const updatedMeditation = await updateMeditation(id, form, token);
//       setMeditations((prev) =>
//         prev.map((med) =>
//           med._id === id ? updatedMeditation.data || updatedMeditation : med
//         )
//       );
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete meditation by ID
//   const removeMeditation = async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       await deleteMeditation(id, token);
//       setMeditations((prev) => prev.filter((med) => med._id !== id));
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch one meditation by ID
//   const fetchMeditation = async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const meditation = await getMeditationById(id, token);
//       setLoading(false);
//       return meditation.data || meditation;
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//       return null;
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchMeditations();
//     }
//   }, [token]);

//   return {
//     meditations,
//     loading,
//     error,
//     fetchMeditations,
//     addMeditation,
//     editMeditation,
//     removeMeditation,
//     fetchMeditation,
//   };
// };

// export default useMeditations;
