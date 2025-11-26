import React from "react";
import { Link } from "react-router-dom";
import { ChefHat, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5 border-top">
      <div className="container">
        <div className="row g-4">
          {/* BRAND */}
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
              <ChefHat size={32} className="text-warning me-2" />
              <h4 className="m-0 fw-bold">DELICIOUS</h4>
            </div>
            <p className="text-secondary small">
              Experience culinary excellence with our artisan creations and
              premium ingredients.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {["menu", "about", "gallery", "contact", "reservations"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    <Link
                      className="text-secondary text-decoration-none"
                      to={`/${item}`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2 text-secondary small">
                <Phone size={16} className="text-warning me-2" />
                +1 234 567 8900
              </li>

              <li className="d-flex align-items-center mb-2 text-secondary small">
                <Mail size={16} className="text-warning me-2" />
                info@delicious.com
              </li>

              <li className="d-flex align-items-center mb-2 text-secondary small">
                <MapPin size={16} className="text-warning me-2" />
                123 Culinary Street, NY
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Instagram, link: "#" },
                { Icon: Twitter, link: "#" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="d-flex align-items-center justify-content-center bg-secondary rounded-circle text-dark"
                  style={{
                    width: "40px",
                    height: "40px",
                    transition: "all 0.3s ease",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-top border-secondary mt-4 pt-3 text-center">
          <p className="text-secondary small mb-0">
            © 2025 Delicious Cafe. All rights reserved. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
