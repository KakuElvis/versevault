// src/components/Topbar.jsx
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Topbar = () => {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState("Loading...");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setDisplayName(userSnap.data().displayName || user.email);
          } else {
            setDisplayName(user.email);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setDisplayName(user.email);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center ml-64">
      <h1 className="text-lg font-semibold">Welcome back 👋</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">{displayName}</span>
        <img src="/src/assets/user.svg" alt="user" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Topbar;
