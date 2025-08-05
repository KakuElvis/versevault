// src/pages/AllBlurbs.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { format } from "date-fns";
import PublicNavbar from "../components/Nav";
import Footer from "../components/Footer";

const AllBlurbs = () => {
  const [blurbs, setBlurbs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "blurbs"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blurbData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlurbs(blurbData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />

      <main className="flex-grow px-6 py-25 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-logo">📚 All Blurbs</h2>

        {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : blurbs.length === 0 ? (
            <p className="text-gray-600">No blurbs posted yet.</p>
          ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blurbs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 relative border-l-4 border-blue-500 hover:shadow-lg transition"
              >
                {/* Category Tag */}
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category || "General"}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 truncate">
                  {item.title}
                </h3>

                {/* Blurb Content */}
                <p className="text-gray-700 mb-4 text-sm line-clamp-4">
                  {item.blurb}
                </p>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500">
                  <span>Posted by: {item.userEmail}</span>
                  {item.createdAt?.seconds && (
                    <span>
                      {format(
                        new Date(item.createdAt.seconds * 1000),
                        "PPP p"
                      )}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllBlurbs;
