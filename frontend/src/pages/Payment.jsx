import React, { useState, useEffect } from "react";
import { useRestaurant } from "../context/RestaurantContext";
import { CreditCard, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "../hooks/use-toast";

const Payment = () => {
  const { getCartTotal, clearCart, cart } = useRestaurant();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  // Redirect to cart if empty
  useEffect(() => {
    if (cart.length === 0 && !paymentSuccess) {
      navigate("/cart");
    }
  }, [cart, paymentSuccess, navigate]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Format card number
    if (name === "cardNumber") {
      value = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
    }

    // Format expiry
    if (name === "expiry") {
      value = value.replace(/\D/g, "").slice(0, 4);
      if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      clearCart();

      toast({
        title: "Payment Successful!",
        description: "Your order has been confirmed.",
      });

      setTimeout(() => navigate("/"), 3000);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light pt-5">
        <div className="card shadow-lg p-5 text-center" style={{ maxWidth: "450px" }}>
          <CheckCircle size={80} className="text-success mx-auto mb-4" />
          <h2 className="fw-bold mb-3">Payment Successful!</h2>
          <p className="text-muted mb-2">Thank you for your order.</p>
          <p className="text-secondary small">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light pt-5">
      {/* HEADER */}
      <section className="py-5 bg-dark text-white text-center">
        <h1 className="fw-bold display-5">Checkout</h1>
        <p className="text-secondary">Complete your payment securely</p>
      </section>

      {/* PAYMENT FORM */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: "700px" }}>
          <div className="card shadow p-4">

            {/* ORDER SUMMARY */}
            <div className="border-bottom pb-3 mb-4">
              <h2 className="fw-bold fs-3 mb-3">Order Summary</h2>
              <div className="d-flex justify-content-between">
                <span className="text-muted">Total Amount:</span>
                <span className="fw-bold fs-3 text-warning">₹{getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Card Number */}
              <div className="mb-3">
                <label className="form-label fw-semibold d-flex align-items-center">
                  <CreditCard size={18} className="me-2 text-warning" /> Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                  className="form-control"
                />
              </div>

              {/* Cardholder Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-control"
                />
              </div>

              {/* Expiry & CVV */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="4"
                    required
                    className="form-control"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="btn btn-warning w-100 py-3 fw-bold mt-3"
              >
                {isProcessing ? "Processing..." : `Pay ₹${getCartTotal().toFixed(2)}`}
              </button>
            </form>

            <p className="text-center small text-muted mt-4">
              This is a demo payment. No actual charges will be made.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
