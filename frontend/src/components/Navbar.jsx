import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChefHat, ShoppingCart } from "lucide-react";
import { useRestaurant } from "../context/RestaurantContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, user, logoutUser } = useRestaurant();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handleCartClick = (e) => {
    if (!user) {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <ChefHat className="me-2 text-warning" size={30} />
          <span className="fw-bold fs-4">Yummify</span>
        </Link>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === link.path
                      ? "text-warning fw-bold"
                      : ""
                  }`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* CART */}
            <li className="nav-item ms-lg-3 position-relative">
              <Link
                to="/cart"
                className="nav-link position-relative d-flex align-items-center"
                onClick={handleCartClick}
              >
                <ShoppingCart size={22} />
                {cart.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>

            {/* LOGIN / LOGOUT */}
            {!user ? (
              <li className="nav-item ms-lg-3">
                <Link
                  to="/login"
                  className="btn btn-warning btn-sm text-dark"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item ms-lg-3">
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
