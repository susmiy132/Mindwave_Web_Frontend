

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission with fetch
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, phone, password, confirmPassword } = formData;

    // Basic validation
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      return toast.error("All fields are required");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5050/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If backend returned error message
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Registered successfully", {
        onClose: () => navigate("/login"),
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        {["fullName", "email", "phone", "password", "confirmPassword"].map(
          (field) => (
            <div key={field}>
              <label className="block text-sm capitalize mb-1">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field.toLowerCase().includes("password") ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                autoComplete="off"
              />
            </div>
          )
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-700 hover:bg-purple-800"
          }`}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-700 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
