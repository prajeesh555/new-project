import React, { useState } from "react";
import { useRestaurant } from "../context/RestaurantContext";
import { menuCategories } from "../data/mockData";
import { Plus, Trash2, Edit } from "lucide-react";
import { toast } from "../hooks/use-toast";
import "./Menu.css";

const Menu = ({ isAdmin = false }) => {
  const { menu, addToCart, addMenuItem, removeMenuItem } = useRestaurant();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id || "");

  const [newDish, setNewDish] = useState({
    name: "",
    description: "",
    price: "",
    category: menuCategories[0]?.id || "",
    image: ""
  });

  const filteredItems = menu.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast({
      title: "Added to Cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  // Admin: Add new dish
  const handleAddDish = () => {
    if (!newDish.name || !newDish.price) {
      toast({ title: "Error", description: "Name and price are required." });
      return;
    }
    addMenuItem({ ...newDish, id: Date.now() });
    toast({ title: "Dish added!", description: `${newDish.name} has been added.` });
    setNewDish({ name: "", description: "", price: "", category: activeCategory, image: "" });
  };

  // Admin: Remove dish
  const handleRemoveDish = (id) => {
    removeMenuItem(id);
    toast({ title: "Dish removed!", description: "The dish has been removed." });
  };

  return (
    <div className="min-h-screen pt-5">

      {/* HEADER */}
      <section className="py-5 bg-dark text-white text-center fade-up">
        <h1 className="display-4 fw-bold">Our Menu</h1>
        <p className="text-secondary fs-5">
          Explore our curated selection of artisan creations
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-5 bg-white">
        <div className="container">

          {/* Category Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`btn px-4 py-2 rounded-pill fw-semibold category-btn ${
                  activeCategory === category.id
                    ? "btn-accent text-white"
                    : "btn-light text-dark"
                }`}
              >
                <span className="me-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* ADMIN: Add New Dish */}
          {isAdmin && (
            <div className="card p-3 mb-4">
              <h5 className="fw-bold mb-3">Add New Dish</h5>
              <div className="row g-2">
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Dish Name"
                    value={newDish.name}
                    onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Description"
                    value={newDish.description}
                    onChange={(e) => setNewDish({ ...newDish, description: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="number"
                    placeholder="Price"
                    value={newDish.price}
                    onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={newDish.image}
                    onChange={(e) => setNewDish({ ...newDish, image: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="col-md-1">
                  <button
                    onClick={handleAddDish}
                    className="btn btn-accent w-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MENU CARDS */}
          <div className="row g-4">
            {filteredItems.length === 0 ? (
              <p className="text-center text-muted">No items in this category.</p>
            ) : (
              filteredItems.map((item) => (
                <div className="col-12 col-md-4 fade-in" key={item.id}>
                  <div className="card bg-dark text-white rounded shadow-lg hover-up">

                    {/* IMAGE */}
                    <div className="overflow-hidden" style={{ height: "260px" }}>
                      <img
                        src={item.image || "https://via.placeholder.com/400x260?text=No+Image"}
                        alt={item.name}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="card-body">
                      <h3 className="h4 fw-bold">{item.name}</h3>
                      <p className="text-secondary small">{item.description}</p>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="text-accent h4 fw-bold">${item.price}</span>

                        <div className="d-flex gap-2">
                          {!isAdmin && (
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="btn btn-accent d-flex align-items-center gap-2 fw-semibold btn-sm zoom-btn"
                            >
                              <Plus size={16} />
                              Add
                            </button>
                          )}

                          {isAdmin && (
                            <button
                              onClick={() => handleRemoveDish(item.id)}
                              className="btn btn-danger d-flex align-items-center gap-2 btn-sm"
                            >
                              <Trash2 size={16} />
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Menu;
