import React from "react";
import { Link } from "react-router-dom";
import Meditation from "./meditation/meditation";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-purple-800 text-white fixed top-0 left-0 flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-10 text-white">MindWave</h2>
      <nav className="flex flex-col gap-4 text-lg text-center">
        <Link
          to="/dashboard"
          className="p-2 rounded hover:bg-purple-700 text-white"
        >
          Dashboard
          
        </Link>
        <Link
          to="/meditation"
          className="p-2 rounded hover:bg-purple-700 text-white"
        >
          Meditation
        </Link>
        <Link
          to="/journaling"
          className="p-2 rounded hover:bg-purple-700 text-white"
        >
          Journaling
        </Link>
        <Link
          to="/moodtracker"
          className="p-2 rounded hover:bg-purple-700 text-white"
        >
          Mood Tracker
        </Link>
        <Link
          to="/progress"
          className="p-2 rounded hover:bg-purple-700 text-white"
        >
          Progress Bar
        </Link>
        <Link
          to="/settings"
          className="p-2 rounded hover:bg-purple-700 text-white"
        >
          Settings
        </Link>

        <Link
          to="/notice"
          className="p-2 rounded hover:bg-purple-700 text-white"
        >
          Notice
        </Link>

        <Link
          to="/login"
          className="mt-6 p-2 rounded hover:bg-red-600 text-white"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;


// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className="bg-purple-800 text-white h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
//       <h1 className='text-2xl font-bold hidden md:block'>CWY shop</h1>
//       <ul className='flex flex-col mt-5 text-xl'>
//         <li className='flex items-center py-3 px-2 space-4 hover:rounded hover:cursor-pointer hover:bg-purple-800 hover:text-white'>
//           <FaTachometerAlt/>
//           <span className='hidden'>Dashboard</span>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Sidebar