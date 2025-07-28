// src/components/CreateBlurbModal.jsx
import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const categories = ["Business", "Leadership", "Law", "IT and Software"];

const CreateBlurbModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!title || !blurb || !selectedCategory) return alert("All fields required");
  
      try {
        setLoading(true);
        await addDoc(collection(db, "blurbs"), {
          title,
          blurb,
          category: selectedCategory,
          createdAt: Timestamp.now(),
          userEmail: user.email,
        });
        alert("Blurb posted!");
        navigate("/verse");
      } catch (error) {
        alert("Failed to post blurb: " + error.message);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-10 flex justify-center items-center">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Create a New Blurb</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <textarea
            placeholder="Your blurb..."
            value={blurb}
            onChange={(e) => setBlurb(e.target.value)}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category</label>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    className={`px-4 py-1 rounded-full border ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post Blurb"}
            </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlurbModal;
