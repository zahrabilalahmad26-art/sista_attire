// src/components/Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutGrid,
  ShoppingBag,
  Package,
  Users,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./Layout.css";

const NAV_ITEMS = [
  { to: "/", label: "Overview", icon: LayoutGrid, end: true },
  { to: "/products", label: "Products", icon: Package },
  { to: "/orders", label: "Orders", icon: ShoppingBag },
  { to: "/customers", label: "Customers", icon: Users },
];

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">SA</span>
          <div>
            <div className="brand-name">Sista Attire</div>
            <div className="brand-sub">Admin</div>
          </div>
        </div>

        <nav className="nav">
          {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link--active" : "")
              }
            >
              <Icon size={18} strokeWidth={1.75} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* signature drape motif — represents the flow of chiffon fabric */}
        <svg
          className="drape"
          viewBox="0 0 200 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 20 C 40 0, 60 40, 100 20 S 160 0, 200 20"
            fill="none"
            stroke="var(--gold-soft)"
            strokeWidth="1"
          />
        </svg>

        <div className="sidebar-footer">
          <div className="user-chip">
            <div className="user-avatar">
              {(user?.email || "A").charAt(0).toUpperCase()}
            </div>
            <span className="user-email">{user?.email}</span>
          </div>
          <button className="logout-btn" onClick={logout}>
            <LogOut size={16} strokeWidth={1.75} />
            Sign out
          </button>
        </div>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
