// src/pages/Products.jsx
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { db } from "../firebase";

const EMPTY_FORM = {
  name: "",
  category: "Chiffon",
  price: "",
  stock: "",
  fabric: "",
  color: "",
  image: "",
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snap) => {
      setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

  const filtered = products.filter((p) =>
    p.name?.toLowerCase().includes(query.toLowerCase())
  );

  const openNew = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  const openEdit = (product) => {
    setEditingId(product.id);
    setForm({ ...EMPTY_FORM, ...product });
    setModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      price: Number(form.price) || 0,
      stock: Number(form.stock) || 0,
      updatedAt: serverTimestamp(),
    };
    if (editingId) {
      await updateDoc(doc(db, "products", editingId), payload);
    } else {
      await addDoc(collection(db, "products"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
    }
    setModalOpen(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Remove this product? This can't be undone.")) {
      await deleteDoc(doc(db, "products", id));
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-sub">
            {products.length} item{products.length !== 1 && "s"} in your catalog
          </p>
        </div>
        <button className="btn btn-primary" onClick={openNew}>
          <Plus size={16} /> Add product
        </button>
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
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="card table-card">
        {loading ? (
          <div className="loading-row">Loading products…</div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <h3>No products yet</h3>
            <p>Add your first chiffon dress to get your catalog started.</p>
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Color</th>
                <th>Price</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 500 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.color}</td>
                  <td>PKR {Number(p.price).toLocaleString()}</td>
                  <td>
                    {p.stock <= 0 ? (
                      <span className="badge badge-pending">Out of stock</span>
                    ) : p.stock <= 5 ? (
                      <span className="badge badge-processing">{p.stock} left</span>
                    ) : (
                      <span className="badge badge-delivered">{p.stock} in stock</span>
                    )}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button className="icon-btn" onClick={() => openEdit(p)}>
                      <Pencil size={15} />
                    </button>
                    <button className="icon-btn" onClick={() => handleDelete(p.id)}>
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId ? "Edit product" : "Add product"}</h2>
            <form className="form-grid" onSubmit={handleSave}>
              <label className="form-row">
                <span>Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Emerald Chiffon Kurta Set"
                />
              </label>

              <div className="two-col">
                <label className="form-row">
                  <span>Category</span>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option>Chiffon</option>
                    <option>Lawn</option>
                    <option>Silk</option>
                    <option>Formal</option>
                    <option>Bridal</option>
                  </select>
                </label>
                <label className="form-row">
                  <span>Color</span>
                  <input
                    value={form.color}
                    onChange={(e) => setForm({ ...form, color: e.target.value })}
                    placeholder="e.g. Emerald green"
                  />
                </label>
              </div>

              <div className="two-col">
                <label className="form-row">
                  <span>Price (PKR)</span>
                  <input
                    required
                    type="number"
                    min="0"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                  />
                </label>
                <label className="form-row">
                  <span>Stock quantity</span>
                  <input
                    required
                    type="number"
                    min="0"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                  />
                </label>
              </div>

              <label className="form-row">
                <span>Fabric details</span>
                <input
                  value={form.fabric}
                  onChange={(e) => setForm({ ...form, fabric: e.target.value })}
                  placeholder="e.g. Pure chiffon, unstitched, plain (no embroidery)"
                />
              </label>

              <label className="form-row">
                <span>Image URL</span>
                <input
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://…"
                />
              </label>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingId ? "Save changes" : "Add product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
