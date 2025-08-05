// src/pages/Register.jsx
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      className="bg-gray-100 flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('./src/assets/verse.svg')` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Let’s Blurb</h2>
        <h4 className="text-center text-gray-600 mb-6">
          All you need is your email and password.
        </h4>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁" : "🕶"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-logo text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <div>
          <h3 className="text-center py-3">Or instead</h3>
          <a href="https://www.google.com">
            <button className="flex items-center justify-center px-3 w-full bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <img
                src="./src/assets/google.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign Up with Google
            </button>
          </a>
          <p className="text-center py-3 text-gray-700">
            Already have an account?{' '}
            <a href="/login" className="text-logo">Sign-in</a>
          </p>
          <p className="text-center text-logo text-sm">
            Terms and Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
