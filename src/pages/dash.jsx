import React from 'react'
import graphImage from "../assets/graphdash.png"

export const Dash = () => {
  return (
    <div className="flex">
  
      <main className="p-8 bg-gray-100 min-h-screen w-full">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Welcome to Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Meditation Summary</h2>
            <p className="text-gray-600 mt-2">You completed 3 sessions today.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Mood Tracker</h2>
            <p className="text-gray-600 mt-2">You're feeling great this week!</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Progress Overview</h2>
            <p className="text-gray-600 mt-2">Consistency: 5 days in a row 🎉</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Dashboard Graph</h2>
            <img src={graphImage} alt="Dashboard Chart" className="w-full mt-4" />
        </div>

        
      </main>
    </div>
  )
}
export default Dash
