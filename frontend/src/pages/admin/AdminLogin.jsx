import React, { useState } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import { useNavigate } from "react-router-dom";
import { Lock, ChefHat } from "lucide-react";
import { toast } from "../../hooks/use-toast";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const { loginAdmin } = useRestaurant();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      toast({ title: "Welcome!", description: "Logged in successfully" });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password. Try: admin123",
      });
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2b2b2b, #1c1c1c)",
      }}
    >
      <div
        className="bg-white rounded shadow p-4 p-md-5"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "70px",
              height: "70px",
              background: "rgba(212, 114, 75, 0.15)",
            }}
          >
            <ChefHat size={34} color="#D4724B" />
          </div>
          <h2 className="fw-bold">Admin Login</h2>
          <p className="text-muted">Enter your password to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold d-flex align-items-center">
              <Lock size={16} className="me-2" color="#D4724B" />
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
            />
            <small className="text-muted">Default password: admin123</small>
          </div>

          <button
            type="submit"
            className="btn w-100 mt-3 text-white"
            style={{ backgroundColor: "#D4724B", fontWeight: 600 }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
