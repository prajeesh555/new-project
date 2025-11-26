import React, { useState } from "react";
import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { useRestaurant } from "../../context/RestaurantContext";
import {
  LayoutDashboard,
  UtensilsCrossed,
  ShoppingBag,
  Calendar,
  Users,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";

const AdminLayout = () => {
  const { adminLoggedIn, logoutAdmin } = useRestaurant(); // Corrected naming
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Redirect if not logged in
  if (!adminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: UtensilsCrossed, label: "Menu Management", path: "/admin/menu" },
    { icon: ShoppingBag, label: "Orders", path: "/admin/orders" },
    { icon: Calendar, label: "Reservations", path: "/admin/reservations" },
    { icon: Users, label: "Staff", path: "/admin/staff" },
    { icon: Settings, label: "Settings", path: "/admin/settings" }
  ];

  const handleLogout = () => {
    logoutAdmin();
  };

  return (
    <div className="d-flex">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside
        className={`bg-dark text-white d-flex flex-column p-3 ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
        style={{
          width: isSidebarOpen ? "250px" : "0px",
          transition: "0.3s",
          overflowX: "hidden",
          position: "fixed",
          minHeight: "100vh",
          left: 0,
          top: 0,
          zIndex: 1000
        }}
      >
        {isSidebarOpen && (
          <>
            <div className="mb-4 border-bottom pb-3">
              <h4 className="mb-0">Admin Panel</h4>
              <small className="text-secondary">Restaurant Management</small>
            </div>

            <nav className="flex-grow-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`d-flex align-items-center mb-2 p-2 rounded text-decoration-none ${
                    location.pathname === item.path
                      ? "bg-primary text-white"
                      : "text-light"
                  }`}
                >
                  <item.icon size={20} className="me-2" />
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-top pt-3">
              <button
                onClick={handleLogout}
                className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center"
              >
                <LogOut size={18} className="me-2" /> Logout
              </button>
            </div>
          </>
        )}
      </aside>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: isSidebarOpen ? "250px" : "0px",
          transition: "0.3s",
          width: "100%"
        }}
      >
        {/* Top bar */}
        <header className="bg-white border-bottom p-3 d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-dark"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="text-secondary text-decoration-none">
            View Website
          </Link>
        </header>

        {/* Page content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
