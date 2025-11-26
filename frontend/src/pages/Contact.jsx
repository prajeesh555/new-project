import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "123 Culinary Street, New York, NY 10001",
    },
    { icon: Phone, title: "Phone", info: "+1 (234) 567-8900" },
    { icon: Mail, title: "Email", info: "info@delicious.com" },
    { icon: Clock, title: "Hours", info: "Mon-Sun: 8:00 AM - 10:00 PM" },
  ];

  return (
    <div className="min-vh-100 pt-5">
      {/* HEADER */}
      <section className="py-5 bg-dark text-white text-center">
        <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
        <p className="text-secondary fs-5">We'd love to hear from you</p>
      </section>

      {/* CONTENT */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            {/* LEFT - FORM */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                {["name", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label className="form-label text-capitalize">{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}

                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Write your message..."
                  />
                </div>

                <button type="submit" className="btn btn-dark py-3 w-100">
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT - CONTACT INFO */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Contact Information</h2>
              <div className="d-flex flex-column gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <div
                      className="bg-light rounded-circle p-3 shadow-sm d-flex align-items-center justify-content-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <item.icon size={26} className="text-dark" />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">{item.title}</h5>
                      <p className="text-muted mb-0">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* IMAGE */}
              <div className="mt-4 rounded overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                  alt="Restaurant Location"
                  className="img-fluid"
                  style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
