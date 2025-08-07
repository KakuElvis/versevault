// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateBlurb from './pages/CreateBlurb';
import Profile from './pages/Profile';
import Verse from './pages/Verse';
import ProtectedRoute from './routes/ProtectedRoute';
import AllBlurbs from './pages/AllBlurbs';
import ProfileSettings from "./pages/ProfileSettings";
import MyBlurbs from "./pages/MyBlurbs";

//admin page import
import AdminRoute from "./routes/AdminRoute";

import AdminLogin from "./pages/AdminLogin";

import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blurbs" element={<AllBlurbs />} /> 
      <Route path="/settings" element={<ProtectedRoute><ProfileSettings /></ProtectedRoute>} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-blurb"
        element={
          <ProtectedRoute>
            <CreateBlurb />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/verse"
        element={
          <ProtectedRoute>
            <Verse />
          </ProtectedRoute>
        }
      />
      <Route path="/my-blurbs" element={<MyBlurbs />} />
      {/* <Route path="/blurbs" element={<AllBlurbs />} /> */}


      {/* Admin Page Route */}

        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

     <Route
        path="/admin-users"
        element={
          <AdminRoute>
            <AdminUsers />
          </AdminRoute>
        }
      />

  <Route path="/admin-login" element={<AdminLogin />} />
  {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}




    </Routes>



  );
};

export default App;