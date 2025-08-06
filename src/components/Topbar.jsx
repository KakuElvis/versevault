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
    <div className="bg-white shadow px-6 py-6 flex justify-between items-center sm:justify-between flex-row-reverse sm:flex-row fixed top-0 left-0 right-0 z-20">
  <h1 className="text-base font-semibold px-10 text-right sm:text-left">Welcome 👋 {displayName}</h1>
  {/* <div className="flex items-center space-x-4 text-right sm:text-left">
    <span className="text-gray-700">{displayName}</span>
    <img src="/src/assets/user.svg" alt="user" className="w-8 h-8 rounded-full" />
  </div> */}
</div>

  );
};

export default Topbar;
