import React, { useState } from "react";
import { Camera } from "lucide-react"; // Optional, use a camera icon library or replace with emoji/image
import { useLocation } from "react-router-dom";

export default function profilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const location = useLocation();

  const { fullName, email } = location.state || {};
  const savedUser = JSON.parse(localStorage.getItem("userDetails"));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Account Settings
      </h1>

      {/* Profile Container */}
      <div className="flex flex-col sm:flex-col items-center sm:items-start bg-white p-3 rounded-2xl shadow-md gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 gap-6">
          {/* Profile Image Section */}
          <div className="relative group">
            <img
              src={profileImage || "/vite.svg"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 text-center"
            />
            <label
              htmlFor="fileUpload"
              className="absolute bottom-0 right-0 bg-black bg-opacity-60 p-2 rounded-full cursor-pointer group-hover:scale-105 transition"
            >
              <Camera className="w-5 h-5 text-white" />
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* User Info Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-gray-800">{fullName}</h2>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>
        <p className="text-gray-500 pl-7">
          Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr. Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
          Sed Diam
        </p>
      </div>

      {/* Description Below */}
    </div>
  );
}
