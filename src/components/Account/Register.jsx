import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div
      className="bg-gray-100 flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/verse.svg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Let’s Blurb</h2>
        <h4 className="text-center text-gray-600 mb-6">
          All you need is your email and password.
        </h4>

        <form action="#" method="POST">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* OR separator */}
        <div>
          <h3 className="text-center py-3 text-gray-600">Or instead</h3>
        </div>

        {/* Google Signup */}
        <div className="mb-4">
          <a href="https://www.google.com">
            <button className="flex items-center justify-center w-full bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <img
                src="/src/assets/google.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign Up with Google
            </button>
          </a>
        </div>

        {/* Link to Login */}
        <div>
          <Link to="/signin">
            <h3 className="text-center py-3 text-gray-700">
              Already have an account?{" "}
              <span className="text-blue-700 hover:underline font-medium">Sign in</span>
            </h3>
          </Link>

          <h5 className="text-center text-blue-400 text-sm">
            Terms and Conditions | Privacy Policy
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Register;
