import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

const PAGE_SIZE = 6;

const Verse = () => {
  const [blurbs, setBlurbs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const fetchBlurbs = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const blurbsRef = collection(db, "blurbs");
      let q = query(blurbsRef, orderBy("createdAt", "desc"), limit(PAGE_SIZE));

      if (lastVisibleDoc) {
        q = query(
          blurbsRef,
          orderBy("createdAt", "desc"),
          startAfter(lastVisibleDoc),
          limit(PAGE_SIZE)
        );
      }

      const snapshot = await getDocs(q);
      const newDocs = snapshot.docs;

      if (newDocs.length > 0) {
        const newBlurbs = newDocs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlurbs((prev) => [...prev, ...newBlurbs]);
        setLastVisibleDoc(newDocs[newDocs.length - 1]);

        if (newDocs.length < PAGE_SIZE) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading blurbs:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [lastVisibleDoc, loading, hasMore]);

  useEffect(() => {
    fetchBlurbs();
  }, []);

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchBlurbs();
        }
      },
      { threshold: 1 }
    );

    const ref = loaderRef.current;
    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [loaderRef, fetchBlurbs, loading, hasMore]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 md:pl-64">
        <Topbar />
        <main className="pt-20 px-4 sm:px-6 w-full max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-logo">📚 All Blurbs</h2>

          {blurbs.length === 0 && !loading ? (
            <p className="text-gray-600 text-center">No blurbs posted yet.</p>
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

          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {hasMore && <div ref={loaderRef} className="h-12"></div>}

          {!hasMore && blurbs.length > 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              🎉 You’ve reached the end.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Verse;
