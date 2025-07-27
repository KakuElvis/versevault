// src/pages/AllBlurbs.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { format } from "date-fns";

const AllBlurbs = () => {
  const [blurbs, setBlurbs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "blurbs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blurbData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlurbs(blurbData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">All Blurbs</h2>

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
            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
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
                  {format(new Date(item.createdAt.seconds * 1000), "PPP p")}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlurbs;
