import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Global CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Toast context
import { ToastProvider } from "./hooks/use-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
