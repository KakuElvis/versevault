import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div
      className="bg-gray-100 flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/verse.svg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-700">Start Blurbing</h2>
        <h4 className="text-left text-gray-600 mb-6">Login to blurb</h4>

        <form>
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-gray-600 text-xl"
              onClick={togglePassword}
              title={showPassword ? "Hide password" : "Show password"}
            >
              👁️
            </span>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-sm">
              Remember Me
            </label>
          </div>

          {/* Forgot Password */}
          <div className="text-left mb-4">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Or separator */}
        <div>
          <h3 className="text-center py-3 text-gray-600">Or instead</h3>
        </div>

        {/* Google Sign-in */}
        <div className="mb-4">
          <a href="https://www.google.com">
            <button className="flex items-center justify-center w-full bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              <img
                src="/src/assets/google.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </a>
        </div>

        {/* Sign-up */}
        <div>
          <Link to="/signup">
            <h3 className="text-center py-3 text-gray-700">
              Don’t have an account?{" "}
              <span className="text-blue-700 font-semibold hover:underline">Sign up</span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
