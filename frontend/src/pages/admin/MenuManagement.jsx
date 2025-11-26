import React, { useState } from 'react';
import { useRestaurant } from '../../context/RestaurantContext';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { toast } from '../../hooks/use-toast';

const MenuManagement = () => {
  const { menu, addMenuItem, updateMenuItem, deleteMenuItem } = useRestaurant();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [imageError, setImageError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "appetizers",
    price: "",
    image: "",
    description: "",
    featured: false
  });

  /* -------------------------- FORM SUBMIT -------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image.startsWith("http")) {
      toast({ title: "Invalid Image URL", description: "Enter a valid image link" });
      return;
    }

    if (editingItem) {
      updateMenuItem(editingItem.id, { ...formData, price: Number(formData.price) });
      toast({ title: "Item updated successfully!" });
    } else {
      addMenuItem({ ...formData, price: Number(formData.price) });
      toast({ title: "Item added successfully!" });
    }

    resetForm();
  };

  /* --------------------------- EDIT ITEM --------------------------- */
  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setImageError(false);
    setIsModalOpen(true);
  };

  /* -------------------------- DELETE ITEM -------------------------- */
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteMenuItem(id);
      toast({ title: "Item deleted successfully!" });
    }
  };

  /* --------------------------- RESET FORM -------------------------- */
  const resetForm = () => {
    setFormData({
      name: "",
      category: "appetizers",
      price: "",
      image: "",
      description: "",
      featured: false,
    });
    setEditingItem(null);
    setImageError(false);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold fs-3">Menu Management</h1>
          <p className="text-muted">Manage your restaurant menu items</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="btn d-flex align-items-center gap-2 text-white"
          style={{ backgroundColor: "#D4724B" }}
        >
          <Plus size={18} />
          Add Item
        </button>
      </div>

      {/* -------------------- MENU GRID -------------------- */}
      <div className="row g-4">
        {menu.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="position-relative" style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover", borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found")}
                />
                {item.featured && (
                  <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2">
                    Featured
                  </span>
                )}
              </div>

              <div className="card-body">
                <h5 className="fw-bold">{item.name}</h5>
                <p className="text-muted" style={{ height: "45px", overflow: "hidden" }}>
                  {item.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-bold text-primary">${item.price}</span>
                  <div className="d-flex gap-2">
                    <button onClick={() => handleEdit(item)} className="btn btn-sm btn-outline-primary">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-outline-danger">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* -------------------- MODAL -------------------- */}
      {isModalOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
          onClick={(e) => e.target === e.currentTarget && resetForm()} // Close on backdrop click
        >
          <div
            className="bg-white p-4 rounded shadow-lg"
            style={{ width: "600px", maxHeight: "90vh", overflowY: "auto", animation: "fadeIn 0.2s" }}
          >
            <h4 className="fw-bold mb-3">{editingItem ? "Edit Menu Item" : "Add Menu Item"}</h4>

            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* CATEGORY */}
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-control"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="appetizers">Appetizers</option>
                  <option value="mains">Main Course</option>
                  <option value="desserts">Desserts</option>
                  <option value="beverages">Beverages</option>
                </select>
              </div>

              {/* PRICE */}
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>

              {/* IMAGE URL + PREVIEW */}
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="url"
                  className="form-control"
                  required
                  value={formData.image}
                  onChange={(e) => {
                    setFormData({ ...formData, image: e.target.value });
                    setImageError(false);
                  }}
                />
                {formData.image && !imageError && (
                  <img
                    src={formData.image}
                    alt="preview"
                    className="mt-2 rounded"
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                    onError={() => setImageError(true)}
                  />
                )}
                {imageError && (
                  <div className="text-danger mt-1">Invalid image URL</div>
                )}
              </div>

              {/* DESCRIPTION */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  rows="3"
                  className="form-control"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>

              {/* FEATURED */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                />
                <label className="form-check-label">Featured Item</label>
              </div>

              {/* ACTIONS */}
              <div className="d-flex gap-3 mt-3">
                <button type="submit" className="btn text-white w-50" style={{ backgroundColor: "#D4724B" }}>
                  {editingItem ? "Update" : "Add"} Item
                </button>
                <button type="button" onClick={resetForm} className="btn btn-outline-secondary w-50">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;
