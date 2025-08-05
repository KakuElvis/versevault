// src/pages/Login.jsx
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">
          Start Blurbing
        </h2>
        {/* <h4 className="text-left text-gray-600 mb-6">Login to blurb</h4> */}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-logo"
          />
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-logo"
              required
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁" : "🕶"}
            </span>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-sm">
              Remember Me
            </label>
          </div>
          <div className="text-left mb-4">
            <a href="#" className="text-logo text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-logo text-white p-3 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <div>
          <h3 className="text-center py-3">Or instead</h3>
          <a href="#">
            <button className="flex items-center justify-center px-3 w-full bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-logo">
              <img
                src="../src/assets/google.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </a>
          <div>
            <Link to="/register">
              <h3 className="text-center py-3 text-gray-700">
                Don't have an account? <span className="text-logo">Sign-up</span>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;