// // import { useState, useEffect } from "react";
// // import {
// //   fetchMeditations,
// //   fetchJournals,
// //   fetchMoodData,
// // } from "../services/progressServices";

// // /**
// //  * Custom hook to fetch and calculate progress data
// //  * @param {string} token - JWT auth token
// //  * @returns Object containing progress states
// //  */
// // export const useProgressData = (token) => {
// //   const [completion, setCompletion] = useState(0);
// //   const [meditationData, setMeditationData] = useState([]);
// //   const [journalData, setJournalData] = useState([]);
// //   const [moodData, setMoodData] = useState([]);
// //   const [progressBreakdown, setProgressBreakdown] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const loadProgress = async () => {
// //       setLoading(true);
// //       setError(null);

// //       try {
// //         const [meditations, journals, moods] = await Promise.all([
// //           fetchMeditations(token),
// //           fetchJournals(token),
// //           fetchMoodData(token),
// //         ]);

// //         setMeditationData(meditations || []);
// //         setJournalData(journals || []);
// //         setMoodData(moods || []);

// //         // Score Calculation
// //         const medScore = Math.min((meditations.length / 7) * 100, 100);
// //         const journalScore = Math.min((journals.length / 7) * 100, 100);
// //         const moodScore =
// //           moods.length > 0
// //             ? Math.min(
// //                 (moods.reduce((acc, m) => acc + (m.moodLevel || 0), 0) /
// //                   (moods.length * 5)) *
// //                   100,
// //                 100
// //               )
// //             : 0;

// //         const overall = Math.round((medScore + journalScore + moodScore) / 3);

// //         setCompletion(overall);

// //         setProgressBreakdown([
// //           { name: "Meditation", value: medScore },
// //           { name: "Journaling", value: journalScore },
// //           { name: "Mood", value: moodScore },
// //         ]);
// //       } catch (err) {
// //         console.error("Failed to fetch progress data", err);
// //         setError(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (token) {
// //       loadProgress();
// //     }
// //   }, [token]);

// //   return {
// //     completion,
// //     meditationData,
// //     journalData,
// //     moodData,
// //     progressBreakdown,
// //     loading,
// //     error,
// //   };
// // };


// import { useState, useEffect } from "react";
// import {
//   fetchMeditations,
//   fetchJournals,
//   fetchMoodData
// } from "../services/progressServices";

// export const useProgressData = (token) => {
//   const [completion, setCompletion] = useState(0);
//   const [meditationData, setMeditationData] = useState([]);
//   const [journalData, setJournalData] = useState([]);
//   const [moodData, setMoodData] = useState([]);
//   const [progressBreakdown, setProgressBreakdown] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadProgress = async () => {
//       try {
//         const [meditations, journals, moods] = await Promise.all([
//           fetchMeditations(token),
//           fetchJournals(token),
//           fetchMoodData(token)
//         ]);

//         setMeditationData(meditations || []);
//         setJournalData(journals || []);
//         setMoodData(moods || []);

//         const medScore = Math.min((meditations.length / 7) * 100, 100);
//         const journalScore = Math.min((journals.length / 7) * 100, 100);
//         const moodScore =
//           moods.length > 0
//             ? Math.min(
//                 (moods.reduce((acc, m) => acc + m.moodLevel, 0) /
//                   (moods.length * 5)) *
//                   100,
//                 100
//               )
//             : 0;

//         const overall = Math.round((medScore + journalScore + moodScore) / 3);

//         // Handle empty data fallback:
//         if (
//           meditations.length === 0 &&
//           journals.length === 0 &&
//           moods.length === 0
//         ) {
//           setProgressBreakdown([{ name: "No Data", value: 1 }]);
//           setCompletion(0);
//         } else {
//           setProgressBreakdown([
//             { name: "Meditation", value: medScore },
//             { name: "Journaling", value: journalScore },
//             { name: "Mood", value: moodScore }
//           ]);
//           setCompletion(overall);
//         }
//       } catch (err) {
//         console.error("Failed to fetch progress data", err);
//         setError(err.message || "Unknown error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (token) {
//       loadProgress();
//     } else {
//       // If no token, just set loading false so UI doesn't stay stuck
//       setLoading(false);
//       setProgressBreakdown([{ name: "No Data", value: 1 }]);
//       setCompletion(0);
//     }
//   }, [token]);

//   return {
//     completion,
//     meditationData,
//     journalData,
//     moodData,
//     progressBreakdown,
//     loading,
//     error
//   };
// };
