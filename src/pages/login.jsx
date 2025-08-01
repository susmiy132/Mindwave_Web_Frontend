

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5050/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         // Save token
//         localStorage.setItem("token", data.token);

//         // Show toast success message
//         toast.success("Login successful");

//         // Navigate to dashboard after a short delay so toast is visible
//         setTimeout(() => {
//           navigate("/dashboard");
//         }, 1500);
//       } else {
//         toast.error(data.message || "Login failed");
//       }
//     } catch (err) {
//       toast.error("Login error: " + err.message);
//       console.error("Login error:", err.message);
//     }
//   };

//   return (
//     <div className="w-full flex items-center fixed top-0 left-0 justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             name="rememberMe"
//             checked={rememberMe}
//             onChange={(e) => setRememberMe(e.target.checked)}
//             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//           />
//           <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
//             Remember me
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
//         >
//           Login
//         </button>

//         <p className="text-sm text-center text-gray-600">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-purple-700 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
