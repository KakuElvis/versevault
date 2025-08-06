// src/pages/AllBlurbs.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { format } from "date-fns";
import PublicNavbar from "../components/Nav";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner"; // optional loading spinner

const BLURBS_PER_PAGE = 9;

const AllBlurbs = () => {
  const [blurbs, setBlurbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastVisibleDocs, setLastVisibleDocs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlurbs, setTotalBlurbs] = useState(0);

  // Fetch total count only once
  useEffect(() => {
    const fetchCount = async () => {
      const snapshot = await getDocs(collection(db, "blurbs"));
      setTotalBlurbs(snapshot.size);
    };
    fetchCount();
  }, []);

  const totalPages = Math.ceil(totalBlurbs / BLURBS_PER_PAGE);

  useEffect(() => {
    const fetchBlurbs = async () => {
      setLoading(true);
      try {
        let q = query(collection(db, "blurbs"), orderBy("createdAt", "desc"), limit(BLURBS_PER_PAGE));

        if (currentPage > 1 && lastVisibleDocs[currentPage - 2]) {
          q = query(
            collection(db, "blurbs"),
            orderBy("createdAt", "desc"),
            startAfter(lastVisibleDocs[currentPage - 2]),
            limit(BLURBS_PER_PAGE)
          );
        }

        const snapshot = await getDocs(q);
        const fetchedBlurbs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const updatedLastVisible = [...lastVisibleDocs];
        updatedLastVisible[currentPage - 1] = snapshot.docs[snapshot.docs.length - 1];

        setLastVisibleDocs(updatedLastVisible);
        setBlurbs(fetchedBlurbs);
      } catch (err) {
        console.error("Error fetching blurbs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlurbs();
  }, [currentPage]);

  const handlePageChange = (pageNum) => {
    if (pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />
      <main className="flex-grow px-6 py-10 bg-gray-100 mt-15">
        <h2 className="text-2xl font-bold mb-6 text-logo">Blurbs</h2>

        {loading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : blurbs.length === 0 ? (
          <p>No blurbs posted yet.</p>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blurbs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-6 relative border-l-4 border-blue-500 hover:shadow-lg transition"
                >
                  <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category || "General"}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4 truncate">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mb-4 text-sm line-clamp-4">
                    {item.blurb}
                  </p>

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

            {/* Pagination Buttons */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-logo text-white"
                      : "bg-white border border-gray-300"
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AllBlurbs;
