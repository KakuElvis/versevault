// src/pages/CreateBlurb.jsx
import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const categories = ["Business", "Leadership", "Law", "IT and Software"];

const CreateBlurb = () => {
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
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Topbar />
      <main className="ml-64 p-6">
        <div className="bg-white shadow p-6 rounded max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Create a Blurb</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Book Title</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="e.g. The Alchemist"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Blurb</label>
              <textarea
                className="w-full border rounded px-3 py-2"
                rows={5}
                placeholder="Share a thought, quote, or reflection..."
                value={blurb}
                onChange={(e) => setBlurb(e.target.value)}
              ></textarea>
            </div>

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
      </main>
    </div>
  );
};

export default CreateBlurb;
