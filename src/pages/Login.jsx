import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle Google Sign-in
  const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    toast.success("Signed in with Google!");
    navigate("/dashboard");
  } catch (err) {
    console.error("Google Sign-In Error:", err.message);
    toast.error(`Google Sign-In Failed: ${err.message}`);
  }
};


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!", { autoClose: 3000 });

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-gray-100 flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('./src/assets/verse.svg')` }}
    >
      <ToastContainer position="top-right" hideProgressBar />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">
          Start Blurbing
        </h2>

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
            disabled={loading}
            className={`w-full bg-logo text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg cursor-pointer ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div>
          <h3 className="text-center py-3">Or instead</h3>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-logo"
          >
            <img
              src="../src/assets/google.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
          <div>
            <Link to="/register">
              <h3 className="text-center py-3 text-gray-700">
                Don't have an account?{" "}
                <span className="text-logo">Sign-up</span>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
