// src/pages/Dashboard.jsx
import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { db } from "../firebase";

function formatDay(date) {
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubOrders = onSnapshot(collection(db, "orders"), (snap) =>
      setOrders(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    const unsubProducts = onSnapshot(collection(db, "products"), (snap) =>
      setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    const unsubCustomers = onSnapshot(collection(db, "customers"), (snap) => {
      setCustomers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => {
      unsubOrders();
      unsubProducts();
      unsubCustomers();
    };
  }, []);

  const revenue = useMemo(
    () => orders.reduce((sum, o) => sum + Number(o.total || 0), 0),
    [orders]
  );

  const pendingOrders = orders.filter((o) => (o.status || "pending") === "pending").length;
  const lowStock = products.filter((p) => Number(p.stock) <= 5).length;

  const chartData = useMemo(() => {
    const days = {};
    const now = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      days[formatDay(d)] = 0;
    }
    orders.forEach((o) => {
      const d = o.createdAt?.toDate ? o.createdAt.toDate() : null;
      if (!d) return;
      const key = formatDay(d);
      if (key in days) days[key] += Number(o.total || 0);
    });
    return Object.entries(days).map(([day, total]) => ({ day, total }));
  }, [orders]);

  const topProducts = useMemo(() => {
    const counts = {};
    orders.forEach((o) => {
      (o.items || []).forEach((item) => {
        counts[item.name] = (counts[item.name] || 0) + (item.quantity || 1);
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [orders]);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Overview</h1>
          <p className="page-sub">A snapshot of how Sista Attire is doing today</p>
        </div>
      </div>

      <div className="stat-grid">
        <div className="card stat-card">
          <div className="stat-label">Total revenue</div>
          <div className="stat-value">PKR {revenue.toLocaleString()}</div>
          <div className="stat-delta">{orders.length} orders total</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Pending orders</div>
          <div className="stat-value">{pendingOrders}</div>
          <div className={"stat-delta" + (pendingOrders > 0 ? " down" : "")}>
            {pendingOrders > 0 ? "Need attention" : "All caught up"}
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Products in catalog</div>
          <div className="stat-value">{products.length}</div>
          <div className={"stat-delta" + (lowStock > 0 ? " down" : "")}>
            {lowStock > 0 ? `${lowStock} running low` : "Stock levels healthy"}
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Customers</div>
          <div className="stat-value">{customers.length}</div>
          <div className="stat-delta">On record</div>
        </div>
      </div>

      <div className="card" style={{ padding: "24px 24px 12px", marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, marginBottom: 16 }}>Revenue, last 14 days</h3>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5c1f2e" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#5c1f2e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ece4d6" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#6b6259" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#6b6259" }} axisLine={false} tickLine={false} width={60} />
            <Tooltip
              formatter={(v) => [`PKR ${Number(v).toLocaleString()}`, "Revenue"]}
              contentStyle={{ borderRadius: 10, border: "1px solid #ece4d6", fontSize: 12.5 }}
            />
            <Area type="monotone" dataKey="total" stroke="#5c1f2e" strokeWidth={2} fill="url(#rev)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card table-card">
        <h3 style={{ fontSize: 16, padding: "18px 20px 4px" }}>Best-selling products</h3>
        {loading ? (
          <div className="loading-row">Loading…</div>
        ) : topProducts.length === 0 ? (
          <div className="empty-state">
            <h3>No sales yet</h3>
            <p>Once orders come in, your top products will show here.</p>
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Units sold</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map(([name, count]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
