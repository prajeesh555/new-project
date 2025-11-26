import { createContext, useContext, useState, useEffect } from "react";

// Create Toast Context
const ToastContext = createContext();

// Toast Provider
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Add a toast
  const addToast = ({ title, description, duration = 3000 }) => {
    const id = Date.now() + Math.floor(Math.random() * 1000); // Unique ID
    setToasts((prev) => [...prev, { id, title, description }]);

    // Auto-remove after duration
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  };

  // Remove a toast
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Expose globally for non-hook usage
  useEffect(() => {
    window.__addToast = addToast;
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Hook to use Toast
export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
};

// Simple function for global toast usage
export function toast({ title, description }) {
  window.__addToast?.({ title, description });
}
