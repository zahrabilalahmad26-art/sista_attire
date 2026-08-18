// src/Admin/App.jsx
// This is the admin sub-app. It does NOT create its own <BrowserRouter> —
// it's meant to be mounted inside your site's existing router, e.g.:
//
//   // in your top-level src/App.jsx
//   import AdminApp from "./Admin/App";
//   <Route path="/admin/*" element={<AdminApp />} />
//
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import "./styles/tokens.css";
import "./styles/ui.css";

function Gate({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b6259" }}>
        Loading…
      </div>
    );
  }
  if (!user) return <Login />;
  return children;
}

export default function AdminApp() {
  return (
    <AuthProvider>
      <Gate>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>
        </Routes>
      </Gate>
    </AuthProvider>
  );
}
