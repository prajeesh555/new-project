import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  // Admin login
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  // Customer login
  const [user, setUser] = useState(null);

  // Menu & Cart
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  // Staff
  const [allStaff, setAllStaff] = useState([]);

  // Orders & Reservations
  const [allOrders, setAllOrders] = useState([]);
  const [allReservations, setAllReservations] = useState([]);

  /* ------------------ CUSTOMER LOGIN ------------------ */
  useEffect(() => {
    const storedCustomer = localStorage.getItem("customer");
    if (storedCustomer) setUser(JSON.parse(storedCustomer));
  }, []);

  const loginUser = (email) => {
    const customer = { email };
    setUser(customer);
    localStorage.setItem("customer", JSON.stringify(customer));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("customer");
  };

  /* ------------------ ADMIN LOGIN ------------------ */
  const loginAdmin = (password) => {
    if (password === "admin123") {
      setAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setAdminLoggedIn(false);
  };

  /* ------------------ CART ------------------ */
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(qty, 1) } : i))
    );
  };

  const getCartTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  /* ------------------ MENU ------------------ */
  const addMenuItem = (item) => {
    const newItem = { id: Date.now() + Math.random(), ...item };
    setMenu((prev) => [...prev, newItem]);
  };

  const updateMenuItem = (id, data) => {
    setMenu((prev) => prev.map((i) => (i.id === id ? { ...i, ...data } : i)));
  };

  const deleteMenuItem = (id) => {
    setMenu((prev) => prev.filter((i) => i.id !== id));
  };

  /* ------------------ ORDERS ------------------ */
  const addOrder = (order) => {
    const newOrder = { id: Date.now() + Math.random(), ...order };
    setAllOrders((prev) => [...prev, newOrder]);
  };

  const updateOrderStatus = (id, status) => {
    setAllOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  };

  /* ------------------ RESERVATIONS ------------------ */
  const addReservation = (reservation) => {
    const newReservation = { id: Date.now() + Math.random(), ...reservation };
    setAllReservations((prev) => [...prev, newReservation]);
  };

  const updateReservationStatus = (id, status) => {
    setAllReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  return (
    <RestaurantContext.Provider
      value={{
        adminLoggedIn,
        loginAdmin,
        logoutAdmin,
        user,
        loginUser,
        logoutUser,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        menu,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        allStaff,
        setAllStaff,
        allOrders,
        addOrder,
        updateOrderStatus,
        allReservations,
        addReservation,
        updateReservationStatus,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
