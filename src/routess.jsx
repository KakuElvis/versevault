// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
        <Route
            path="/profile"
            element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        }/>

        <Route
            path="/post_blurb"
            element={
                <ProtectedRoute>
                <CreateBlurb />
                </ProtectedRoute>
        } />

        <Route
        path="/verse"
        element={
            <ProtectedRoute>
            <Verse />
            </ProtectedRoute>
        }
        />



    </Routes>
  );
};

export default AppRoutes;
