import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { fullName, email } = location.state || {};
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  const handleLogin = () => {
    console.log("Email:", formDetails.email);
    console.log("Password:", formDetails.password);
    const savedUser = JSON.parse(localStorage.getItem("userLoginCredientials"));
    console.log(typeof savedUser);
    console.log(savedUser);

    if (savedUser && savedUser.email === formDetails.email && savedUser.password===formDetails.password) {
      console.log(fullName, email);
      localStorage.setItem("userDetails", JSON.stringify({ email, fullName }));
      navigate("/profile", {
        state: { fullName, email },
      });
    } else {
      alert("User not found");
    }
  };
  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };
  const inputField = (label, name, value, type = "text") => (
    <div className="relative mb-8">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onClick={handleFocus}
        placeholder={label}
        className="peer w-full pt-6 pb-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label
        className="absolute top-0 left-3 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all
          flex items-center gap-1
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-blue-600"
      >
        {label}
        {focused[name] && <span className="text-red-500">*</span>}
      </label>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">
          Sign in to your PopX account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Lorem ipset dolow iset newtion
        </p>

        {inputField("Email Address", "email", formDetails.email, "email")}
        {inputField("Password", "password", formDetails.password, "password")}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
