import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EditBlurbModal from "../components/EditBlurbModal";

import "react-toastify/dist/ReactToastify.css";


const MyBlurbs = () => {
  const [user, loadingAuth] = useAuthState(auth);
  const [blurbs, setBlurbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBlurb, setEditingBlurb] = useState(null);
  const navigate = useNavigate();

  // Fetch user's blurbs
  useEffect(() => {
    const fetchMyBlurbs = async () => {
      if (loadingAuth || !user) return;

      setLoading(true);
      try {
        const q = query(
          collection(db, "blurbs"),
          where("userEmail", "==", user.email),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);
        const blurbsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlurbs(blurbsData);
      } catch (err) {
        console.error("Error loading user blurbs:", err);
        toast.error("Failed to load blurbs.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyBlurbs();
  }, [user, loadingAuth]);

  // Delete a blurb
  const handleDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this blurb?");
  if (!confirm) return;

  try {
    await deleteDoc(doc(db, "blurbs", id));
    setBlurbs((prev) => prev.filter((b) => b.id !== id));
    toast.success("✅ Blurb deleted successfully.");
  } catch (err) {
    console.error("Failed to delete blurb:", err);
    toast.error("❌ Failed to delete blurb.");
  }
};


  // Save edited blurb
  const handleSaveEdit = async (updatedBlurb) => {
  try {
    const blurbRef = doc(db, "blurbs", updatedBlurb.id);
    await updateDoc(blurbRef, {
      title: updatedBlurb.title,
      category: updatedBlurb.category,
      blurb: updatedBlurb.blurb,
    });

    setBlurbs((prev) =>
      prev.map((b) => (b.id === updatedBlurb.id ? updatedBlurb : b))
    );

    toast.success("✅ Blurb updated successfully!");
    setEditingBlurb(null);
  } catch (err) {
    console.error("Failed to update blurb:", err);
    toast.error("❌ Failed to update blurb.");
  }
};


  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="pt-20 md:pt-16 px-4 md:pl-64 w-full max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-logo">📝 My Blurbs</h2>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : blurbs.length === 0 ? (
            <p className="text-gray-600 text-center">You haven’t posted any blurbs yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blurbs.map((blurb) => (
                <div
                  key={blurb.id}
                  className="bg-white p-5 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-white bg-logo px-2 py-1 rounded-full">
                        {blurb.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {blurb.createdAt?.seconds
                          ? new Date(blurb.createdAt.seconds * 1000).toLocaleDateString()
                          : ""}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2">{blurb.title}</h3>
                    <p className="text-gray-700 text-sm mb-3">{blurb.blurb}</p>
                    <p className="text-xs text-gray-500">By: {blurb.userName || user?.displayName || "Unknown"}</p>
                    {/* <p className="text-xs text-gray-500">By: {blurb.userEmail}</p> */}

                  </div>

                  <div className="flex justify-end mt-4 space-x-4 text-gray-500">
                    <button
                      onClick={() => setEditingBlurb(blurb)}
                      className="hover:text-blue-600"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(blurb.id)}
                      className="hover:text-red-600"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {editingBlurb && (
        <EditBlurbModal
          blurb={editingBlurb}
          onClose={() => setEditingBlurb(null)}
          onSave={handleSaveEdit}
        />
      )}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default MyBlurbs;
