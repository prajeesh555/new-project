import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { RestaurantProvider } from "./context/RestaurantContext";
import { Toaster } from "./components/ui/toaster";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import CustomerLogin from "./pages/CustomerLogin";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import MenuManagement from "./pages/admin/MenuManagement";
import Orders from "./pages/admin/Orders";
import ReservationsAdmin from "./pages/admin/ReservationsAdmin";
import Staff from "./pages/admin/Staff";
import Settings from "./pages/admin/Settings";

// Layout for user pages with Navbar + Footer
const UserLayout = () => (
  <>
    <Navbar />
    <div className="container py-4">
      <Outlet />
    </div>
    <Footer />
  </>
);

// Layout for pages without Navbar/Footer (login, etc.)
const AuthLayout = () => <Outlet />;

function App() {
  return (
    <RestaurantProvider>
      <BrowserRouter>
        <Routes>

          {/* ===== ADMIN ROUTES ===== */}
          <Route element={<AuthLayout />}>
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="menu" element={<MenuManagement />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reservations" element={<ReservationsAdmin />} />
            <Route path="staff" element={<Staff />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* ===== USER ROUTES ===== */}
          <Route element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="reservations" element={<Reservations />} />
          </Route>

          {/* ===== CUSTOMER LOGIN (no Navbar/Footer) ===== */}
          <Route element={<AuthLayout />}>
            <Route path="login" element={<CustomerLogin />} />
          </Route>

        </Routes>

        <Toaster />
      </BrowserRouter>
    </RestaurantProvider>
  );
}

export default App;
