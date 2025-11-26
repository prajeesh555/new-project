import { useEffect } from "react";
import { useToast } from "../../hooks/use-toast.jsx";

export function Toaster() {
  const { toasts, removeToast, addToast } = useToast();

  // Expose addToast globally (optional)
  useEffect(() => {
    window.__addToast = addToast;
  }, [addToast]);

  // Show Bootstrap toasts when new toasts appear
  useEffect(() => {
    const elements = document.querySelectorAll(".toast");
    elements.forEach((toastEl) => {
      if (window.bootstrap && window.bootstrap.Toast) {
        const t = new window.bootstrap.Toast(toastEl, {
          autohide: true,
          delay: 3000,
        });
        t.show();
      }
    });
  }, [toasts]);

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      {toasts.map(({ id, title, description }) => (
        <div
          key={id}
          className="toast text-bg-dark border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              {title && <strong className="me-2">{title}</strong>}
              {description}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => removeToast(id)}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
}
