// src/pages/AllBlurbs.jsx
import React, { useEffect, useState, useRef, useCallback } from "react";
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
import Spinner from "../components/Spinner";

const BLURBS_PER_PAGE = 6;

const AllBlurbs = () => {
  const [blurbs, setBlurbs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const fetchBlurbs = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      let q = query(
        collection(db, "blurbs"),
        orderBy("createdAt", "desc"),
        limit(BLURBS_PER_PAGE)
      );

      if (lastVisible) {
        q = query(
          collection(db, "blurbs"),
          orderBy("createdAt", "desc"),
          startAfter(lastVisible),
          limit(BLURBS_PER_PAGE)
        );
      }

      const snapshot = await getDocs(q);
      const docs = snapshot.docs;

      if (docs.length === 0) {
        setHasMore(false);
      } else {
        const newBlurbs = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlurbs((prev) => [...prev, ...newBlurbs]);
        setLastVisible(docs[docs.length - 1]);

        if (docs.length < BLURBS_PER_PAGE) {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error("Failed to fetch blurbs:", err);
    } finally {
      setLoading(false);
    }
  }, [lastVisible, loading, hasMore]);

  useEffect(() => {
    fetchBlurbs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchBlurbs();
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [fetchBlurbs, hasMore, loading]);

  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />

      <main className="flex-grow px-4 sm:px-6 py-10 bg-gray-100 mt-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-logo text-center sm:text-left">
          📚 Recent Blurbs
        </h2>

        {blurbs.length === 0 && !loading ? (
          <p className="text-center text-gray-600">No blurbs posted yet.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blurbs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-5 border-l-4 border-logo hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category || "General"}
                  </span>
                  {item.createdAt?.seconds && (
                    <span className="text-xs text-gray-400">
                      {format(new Date(item.createdAt.seconds * 1000), "PPP")}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 mb-4 line-clamp-4">
                  {item.blurb}
                </p>

                <p className="text-xs text-gray-500">
                  Posted by: {item.userName || "Unknown"}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center py-8">
            <Spinner />
          </div>
        )}

        {/* Infinite Scroll Loader */}
        {hasMore && !loading && <div ref={loaderRef} className="h-10" />}

        {!hasMore && blurbs.length > 0 && (
          <p className="text-center text-sm text-gray-500 mt-4">
            🎉 You’ve reached the end.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllBlurbs;
