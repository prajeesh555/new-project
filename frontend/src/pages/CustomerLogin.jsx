import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "../hooks/use-toast";
import { useRestaurant } from "../context/RestaurantContext";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useRestaurant();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple login (accept any credentials)
    loginUser(email);

    toast({
      title: "Login Successful",
      description: "Welcome back!",
    });

    // Redirect to previous page if redirect query exists
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect") || "/";
    navigate(redirect);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Customer Login</h3>

        <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              aria-label="Email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              aria-label="Password"
            />
          </div>

          <button className="btn btn-primary w-100 mt-2" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
