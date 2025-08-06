// src/pages/Register.jsx
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: user.displayName || "", // Optional: Add a display name input if needed
        createdAt: new Date(),
      });

      toast.success("Registration successful!", { autoClose: 1500 });
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Create user doc in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: user.displayName || "",
        createdAt: new Date(),
      });

      toast.success("Signed up with Google!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Google Sign-Up Error:", err.message);
      toast.error(`Google Sign-Up Failed: ${err.message}`);
    }
  };

  return (
    <div
      className="bg-gray-100 flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('./src/assets/verse.svg')` }}
    >
      <ToastContainer position="top-right" hideProgressBar />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Let’s Blurb</h2>
        <h4 className="text-center text-gray-600 mb-6">
          All you need is your email and password.
        </h4>

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full bg-logo text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>

        <div>
          <h3 className="text-center py-3">Or instead</h3>
          <button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center px-3 w-full bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              src="./src/assets/google.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Sign Up with Google
          </button>

          <p className="text-center py-3 text-gray-700">
            Already have an account?{" "}
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
