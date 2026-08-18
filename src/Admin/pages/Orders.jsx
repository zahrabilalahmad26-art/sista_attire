// src/pages/Orders.jsx
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  orderBy,
  query as fsQuery,
} from "firebase/firestore";
import { db } from "../firebase";

const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const q = fsQuery(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setOrders(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateDoc(doc(db, "orders", id), { status });
  };

  const filtered =
    statusFilter === "all"
      ? orders
      : orders.filter((o) => o.status === statusFilter);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Orders</h1>
          <p className="page-sub">
            {orders.length} order{orders.length !== 1 && "s"} total
          </p>
        </div>
      </div>

      <div className="toolbar">
        <select
          className="search-input"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s[0].toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="card table-card">
        {loading ? (
          <div className="loading-row">Loading orders…</div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <h3>No orders here</h3>
            <p>Orders placed on your site will show up in real time.</p>
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Placed</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 500 }}>#{o.id.slice(0, 6).toUpperCase()}</td>
                  <td>{o.customerName || o.customerEmail || "—"}</td>
                  <td>{o.items?.length ?? 0} item{(o.items?.length ?? 0) !== 1 && "s"}</td>
                  <td>PKR {Number(o.total || 0).toLocaleString()}</td>
                  <td>
                    {o.createdAt?.toDate
                      ? o.createdAt.toDate().toLocaleDateString()
                      : "—"}
                  </td>
                  <td>
                    <select
                      className={`badge badge-${o.status || "pending"}`}
                      style={{ border: "none", cursor: "pointer" }}
                      value={o.status || "pending"}
                      onChange={(e) => handleStatusChange(o.id, e.target.value)}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s[0].toUpperCase() + s.slice(1)}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
