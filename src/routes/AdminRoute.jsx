import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) return setIsAdmin(false);

      const docRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(docRef);
      const role = userDoc.data()?.role;

      setIsAdmin(role === "admin");
    };

    checkAdmin();
  }, []);

  if (isAdmin === null) {
    return <div className="p-10 text-center text-lg">Checking access...</div>;
  }

  return isAdmin ? children : <Navigate to="/unauthorized" />;
};

export default AdminRoute;
