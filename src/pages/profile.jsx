


import { useEffect, useState } from "react";
import { fetchUserProfile } from "../services/authServices"; // adjust path if needed
import { useNavigate } from "react-router-dom"; // if using react-router for navigation
import profileImage from "../assets/sus.png";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadProfile = async () => {
    try {
      const userData = await fetchUserProfile();
      setUser(userData);
    } catch (err) {
      console.error("Profile fetch error:", err);
      setError(err.message || "Failed to load profile");
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleUpdate = () => {
    // Navigate to update profile page or open modal, etc.
    navigate("/profile/update"); // adjust path accordingly
  };

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem("token");
    navigate("/login"); // adjust path accordingly
  };

  if (error) {
    return <div>Error loading profile: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6 text-center">
      

      <div>
        <h2 className="text-lg font-semibold">Profile Image</h2>
          <img src={profileImage} alt="Profile"
          style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: 20,
          border: "2px solid #ccc",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}/>
      </div>

      <h1 className="text-2xl font-semibold">{user.fullName}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>

      {/* <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default Profile;
