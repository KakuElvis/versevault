import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Verse = () => {
  const [blurbs, setBlurbs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlurbs = async () => {
    try {
      const blurbsRef = collection(db, "blurbs");
      const q = query(blurbsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const blurbsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlurbs(blurbsData);
    } catch (err) {
      console.error("Error fetching blurbs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlurbs();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="p-4 sm:p-6 w-full max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">📚 All Blurbs</h2>

          {loading ? (
            <p>Loading blurbs...</p>
          ) : blurbs.length === 0 ? (
            <p>No blurbs posted yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blurbs.map((blurb) => (
                <div
                  key={blurb.id}
                  className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
                >
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
                  <p className="text-xs text-gray-500">By: {blurb.userEmail}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Verse;
