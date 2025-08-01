// // // src/components/progress.jsx
// // import React, { useState, useEffect } from "react";
// // import progressImage from "../../assets/graphdash.png"

// // const ProgressBar = () => {
// //   const [completion, setCompletion] = useState(0);

// //   useEffect(() => {
// //     const simulatedProgress = setInterval(() => {
// //       setCompletion((prev) => {
// //         const next = prev + 10;
// //         if (next >= 100) {
// //           clearInterval(simulatedProgress);
// //           return 100;
// //         }
// //         return next;
// //       });
// //     }, 500);

// //     return () => clearInterval(simulatedProgress);
// //   }, []);

// //   return (
// //     // <div className="bg-white p-6 rounded-xl shadow mb-10">
// //     //   <h2 className="text-xl font-semibold mb-4">📈 Progress Bar</h2>
// //     //   <div className="w-full bg-gray-200 rounded-full h-6">
// //     //     <div
// //     //       className="bg-purple-700 h-6 rounded-full text-white text-center text-sm"
// //     //       style={{ width: `${completion}%` }}
// //     //     >
// //     //       {completion}%
// //     //     </div>
// //     //   </div>
// //     // </div>

// //     <div className="space-y-6">
// //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// //             <h2 className="text-xl font-semibold mb-4">📈 Progress Bar</h2>
// //             <div className="w-full bg-gray-200 rounded-full h-6">
// //                 <div 
// //                     className="bg-purple-700 h-6 rounded-full text-white text-center text-sm"
// //                     style={{ width: `${completion}%` }}
// //                 >
// //                     {completion}%
// //                 </div>
// //             </div>
// //         </div>

// //       <h1 className="text-2xl font-bold text-purple-800">Progress Visualization</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-lg font-semibold">Calories</h2>
// //           <img src="/assets/calories-chart.png" alt="Calories Chart" />
// //         </div>
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-lg font-semibold">Activity</h2>
// //           <ul className="text-gray-700 mt-2">
// //             <li>❤️ Heart rate: 130 bpm</li>
// //             <li>🚶 Total steps: 5500</li>
// //             <li>🔥 Kcal burn: 503 Kcal</li>
// //           </ul>
// //         </div>
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-lg font-semibold">Habit Tracker</h2>
// //           <ul className="text-gray-700">
// //             <li>🏃 Morning run - 07:00 AM @ Park (45 mins)</li>
// //             <li>💧 1.5L of water daily - All day</li>
// //           </ul>
// //         </div>
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-lg font-semibold">Daily Progress</h2>
// //           <div className="text-3xl font-bold text-purple-700 text-center">85%</div>
// //         </div>
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-lg font-semibold">Progress</h2>
// //           <img src={progressImage} alt="Progress" />
// //         </div>
// //       </div>
// //       <div className="mt-6 text-center">
// //         <button className="bg-purple-700 text-white px-6 py-2 rounded-full">See More</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProgressBar;


// // src/components/progress.jsx
// import React, { useState, useEffect } from "react";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import progressImage from "../../assets/graphdash.png";

// const COLORS = ["#0088FE", "#FF8042"]; // blue for calories, orange for remainder

// const ProgressBar = () => {
//   const [completion, setCompletion] = useState(0);

//   // Example calories data (replace with real data if available)
//   const caloriesConsumed = 200;  // calories from your API/data
//   const caloriesGoal = 500;      // goal calories

//   // Pie data for calories pie chart
//   const caloriesData = [
//     { name: "Calories Consumed", value: caloriesConsumed },
//     { name: "Remaining", value: Math.max(caloriesGoal - caloriesConsumed, 0) }
//   ];

//   useEffect(() => {
//     const simulatedProgress = setInterval(() => {
//       setCompletion((prev) => {
//         const next = prev + 10;
//         if (next >= 100) {
//           clearInterval(simulatedProgress);
//           return 100;
//         }
//         return next;
//       });
//     }, 500);

//     return () => clearInterval(simulatedProgress);
//   }, []);

//   return (
//     <div className="space-y-6">
//       {/* Progress Bar */}
//       <div className="bg-white p-6 rounded-xl shadow mb-10">
//         <h2 className="text-xl font-semibold mb-4">📈 Progress Bar</h2>
//         <div className="w-full bg-gray-200 rounded-full h-6">
//           <div
//             className="bg-purple-700 h-6 rounded-full text-white text-center text-sm"
//             style={{ width: `${completion}%` }}
//           >
//             {completion}%
//           </div>
//         </div>
//       </div>

//       <h1 className="text-2xl font-bold text-purple-800">Progress Visualization</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Calories Pie Chart */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold mb-4">Calories</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={caloriesData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 label={({ name, percent }) =>
//                   `${name}: ${(percent * 100).toFixed(0)}%`
//                 }
//               >
//                 {caloriesData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Activity Info */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold">Activity</h2>
//           <ul className="text-gray-700 mt-2">
//             <li>❤️ Heart rate: 130 bpm</li>
//             <li>🚶 Total steps: 5500</li>
//             <li>🔥 Kcal burn: 503 Kcal</li>
//           </ul>
//         </div>

//         {/* Habit Tracker */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold">Habit Tracker</h2>
//           <ul className="text-gray-700">
//             <li>🏃 Morning run - 07:00 AM @ Park (45 mins)</li>
//             <li>💧 1.5L of water daily - All day</li>
//           </ul>
//         </div>

//         {/* Daily Progress */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold">Daily Progress</h2>
//           <div className="text-3xl font-bold text-purple-700 text-center">85%</div>
//         </div>

//         {/* Progress Image */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-lg font-semibold">Progress</h2>
//           <img src={progressImage} alt="Progress" />
//         </div>
//       </div>

//       <div className="mt-6 text-center">
//         <button className="bg-purple-700 text-white px-6 py-2 rounded-full">
//           See More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;
