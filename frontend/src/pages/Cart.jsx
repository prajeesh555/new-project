import React from "react";
import { useRestaurant } from "../context/RestaurantContext";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, user } =
    useRestaurant();

  const navigate = useNavigate();

  // Handle empty cart
  if (!cart || cart.length === 0) {
    return (
      <div className="min-vh-100 pt-5 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <ShoppingBag size={90} className="text-secondary mb-4" />
          <h2 className="fw-bold mb-3">Your cart is empty</h2>
          <p className="text-muted mb-4">Add some delicious items to get started!</p>
          <Link to="/menu">
            <button className="btn btn-dark px-4 py-2">Browse Menu</button>
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!user) {
      navigate("/login?redirect=/payment");
      return;
    }
    navigate("/payment");
  };

  return (
    <div className="min-vh-100 pt-5 bg-light">
      {/* Header */}
      <section className="py-5 bg-dark text-white text-center">
        <h1 className="fw-bold display-5 mb-2">Your Cart</h1>
        <p className="text-secondary">Review your items and proceed to checkout</p>
      </section>

      {/* Cart Items */}
      <section className="py-5">
        <div className="container">
          <div className="bg-white rounded shadow p-4 p-md-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center gap-4 py-4 border-bottom flex-wrap flex-md-nowrap"
              >
                {/* Image */}
                <img
                  src={item.image || "https://via.placeholder.com/90?text=No+Image"}
                  alt={item.name || "Cart item"}
                  className="rounded"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />

                {/* Info */}
                <div className="flex-grow-1">
                  <h5 className="fw-bold mb-1">{item.name}</h5>
                  <p className="text-muted small mb-0">
                    ₹{item.price.toFixed(2)} each
                  </p>
                </div>

                {/* Quantity + Price + Remove */}
                <div className="d-flex align-items-center gap-3 ms-auto flex-wrap">
                  {/* Quantity Control */}
                  <div className="d-flex align-items-center bg-light rounded px-3 py-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
                      className="btn btn-link text-dark p-0"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="fw-semibold px-3">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="btn btn-link text-dark p-0"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Total Price */}
                  <p
                    className="fw-bold mb-0 text-nowrap"
                    style={{ width: "80px", textAlign: "right" }}
                  >
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-link text-danger p-0"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="mt-4 pt-4 border-top">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="fw-bold fs-4">Total:</span>
                <span className="fw-bold fs-3 text-dark">
                  ₹{getCartTotal().toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="btn btn-dark w-100 py-3 fs-5"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
