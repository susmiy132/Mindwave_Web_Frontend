// import { useEffect, useState } from "react";
// import { fetchAllJournals } from "../services/journalServices";

// const useJournals = () => {
//   const [journals, setJournals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const token = localStorage.getItem("token");

//   const loadJournals = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchAllJournals(token);
//       setJournals(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadJournals();
//   }, []);

//   return { journals, loading, error, reload: loadJournals };
// };

// export default useJournals;
