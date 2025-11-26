import React, { useState } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import { UserPlus } from "lucide-react";

const Staff = () => {
  const { allStaff, setAllStaff } = useRestaurant();

  const [showModal, setShowModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    experience: "",
    image: "",
  });

  // Image Upload + Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const openAddModal = () => {
    setEditingStaff(null);
    setForm({ name: "", role: "", experience: "", image: "" });
    setShowModal(true);
  };

  const openEditModal = (member) => {
    setEditingStaff(member.id);
    setForm({
      name: member.name,
      role: member.role,
      experience: member.experience,
      image: member.image,
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedForm = {
      ...form,
      name: form.name.trim(),
      role: form.role.trim(),
      experience: form.experience.trim(),
    };

    if (!trimmedForm.name || !trimmedForm.role || !trimmedForm.experience) {
      alert("Please fill all fields.");
      return;
    }

    if (editingStaff) {
      setAllStaff(
        allStaff.map((s) =>
          s.id === editingStaff ? { ...s, ...trimmedForm } : s
        )
      );
    } else {
      setAllStaff([
        ...allStaff,
        { id: Date.now(), ...trimmedForm, image: trimmedForm.image || "https://via.placeholder.com/150" },
      ]);
    }

    setShowModal(false);
  };

  const removeStaff = (id) => {
    if (window.confirm("Are you sure you want to remove this staff member?")) {
      setAllStaff(allStaff.filter((s) => s.id !== id));
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-gray-800 mb-2">
            Staff Management
          </h1>
          <p className="text-gray-600">Manage your team members</p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-[#D4724B] text-white px-6 py-3 rounded-sm font-medium flex items-center gap-2 hover:bg-[#c0613d] transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          <span>Add Staff</span>
        </button>
      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allStaff.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group"
          >
            {/* Image */}
            <div className="relative h-56">
              <img
                src={member.image || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={member.name || "Staff Image"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>

              <p className="text-[#D4724B] font-medium mb-1">{member.role}</p>

              <p className="text-gray-600 text-sm mb-4">
                {member.experience} experience
              </p>

              <div className="flex space-x-2">
                <button
                  onClick={() => openEditModal(member)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Edit
                </button>

                <button
                  onClick={() => removeStaff(member.id)}
                  className="flex-1 border border-red-300 text-red-600 py-2 rounded-sm text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4 z-50 overflow-y-auto">
          <div className="bg-white w-full max-w-lg p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              {editingStaff ? "Edit Staff" : "Add Staff"}
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3 mb-3 rounded"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Role"
                className="w-full border p-3 mb-3 rounded"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Experience (ex: 3 years)"
                className="w-full border p-3 mb-3 rounded"
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                required
              />

              <input
                type="file"
                accept="image/*"
                className="mb-3"
                onChange={handleImageChange}
              />

              {form.image && (
                <img
                  src={form.image}
                  className="w-32 h-32 object-cover rounded mt-2 border shadow"
                  alt="Preview"
                />
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-[#D4724B] text-white rounded"
                >
                  {editingStaff ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
