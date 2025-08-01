// import React from 'react';

// const HomePage = () => {
//   return (
//     // <div className="p-8 text-center">
//     <div className="min-h-screen flex items-center justify-center bg-[#fffaf5] p-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
//             {/* Left Text Section */}
//             <div className="bg-[#5a3fc0] text-white p-8 rounded-3xl relative">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">Guided Meditation and wellness</h2>
//             <p className="mb-6">
//                 Take a step to feeling better with the help of a mental health website.
//                 Benefit from online therapy sessions and self-therapy tools.
//             </p>
//             <button className="bg-white text-[#5a3fc0] font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
//                 Read More
//             </button>
//             {/* Dots */}
//             <div className="absolute bottom-4 left-6 flex space-x-1 mt-4">
//                 <span className="w-2 h-2 bg-white rounded-full"></span>
//                 <span className="w-2 h-2 bg-white opacity-50 rounded-full"></span>
//             </div>
//             </div>

//             {/* Right Illustration */}
//         <div className="relative flex items-center justify-center">
//           {/* Head & Heart */}
//           {/* <div className="relative">
//             <div className="w-72 h-72 bg-[#f4eae2] rounded-full flex items-center justify-center relative">
//               <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
//                 <FaHeartbeat className="text-orange-500 text-5xl" />
//               </div>
//             </div> */}
//             {/* Person */}
//             {/* <div className="absolute left-0 bottom-0 flex flex-col items-center">
//               <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
//               <div className="w-1 h-16 bg-purple-500"></div>
//             </div> */}
//             {/* Settings Icon */}
//             {/* <LuSettings2 className="absolute top-0 right-0 text-purple-600 text-xl" />
//           </div> */}

//           {/* Leaves */}
//           <div className="absolute bottom-0 right-0 flex space-x-2">
//             <div className="w-4 h-8 bg-orange-400 rounded-full rotate-45"></div>
//             <div className="w-4 h-8 bg-purple-600 rounded-full -rotate-45"></div>
//           </div>
//         </div>
//         </div>
        
//       {/* <h1 className="text-4xl font-bold mb-4">Welcome to MindWave</h1>
//       <p className="text-lg text-gray-700">
//         This is the home of mindfulness, journaling, and well-being.
//         Explore meditation, mood tracking, and more.
//       </p> */}
      
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import homeImage from "../assets/home.png"; // Path from src

const HomePage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <img
        src={homeImage}
        alt="Home"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HomePage;


