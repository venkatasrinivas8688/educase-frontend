import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const [focused, setFocused] = useState({
    fullName: false,
    phone: false,
    email: false,
    password: false,
    company: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleFocus = (name) => {
    setFocused((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleRegister = () => {
    //localStorage.removeItem("userVerify");
    console.log("Register Data:", formData);
    const { email, password, fullName } = formData;
    const user = { email: email, password: password };
    localStorage.setItem("userLoginCredientials", JSON.stringify(user));
    navigate("/login", { state: { fullName, email } });
  };

  // Reusable floating input with red asterisk on focus
  const inputField = (label, name, type = "text") => (
    <div className="relative mb-8">
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onFocus={() => handleFocus(name)}
        placeholder=" "
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
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create your PopX account
        </h2>

        {inputField("Full Name", "fullName")}
        {inputField("Phone Number", "phone")}
        {inputField("Email Address", "email", "email")}
        {inputField("Password", "password", "password")}
        {inputField("Company Name", "company")}

        {/* Radio Buttons */}
        <div className="mb-8">
          <p className="mb-2 text-gray-700">Are you an agency?</p>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
