// src/pages/Customers.jsx
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Search } from "lucide-react";
import { db } from "../firebase";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "customers"), (snap) => {
      setCustomers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

  const filtered = customers.filter(
    (c) =>
      c.name?.toLowerCase().includes(query.toLowerCase()) ||
      c.email?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Customers</h1>
          <p className="page-sub">
            {customers.length} customer{customers.length !== 1 && "s"} on record
          </p>
        </div>
      </div>

      <div className="toolbar">
        <div style={{ position: "relative" }}>
          <Search
            size={15}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--ink-soft)",
            }}
          />
          <input
            className="search-input"
            style={{ paddingLeft: 34 }}
            placeholder="Search by name or email…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="card table-card">
        {loading ? (
          <div className="loading-row">Loading customers…</div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <h3>No customers yet</h3>
            <p>Customer profiles are created automatically at checkout.</p>
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Orders</th>
                <th>Total spent</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td style={{ fontWeight: 500 }}>{c.name || "—"}</td>
                  <td>{c.email || "—"}</td>
                  <td>{c.phone || "—"}</td>
                  <td>{c.orderCount ?? 0}</td>
                  <td>PKR {Number(c.totalSpent || 0).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
