import React, { useState } from "react";
import { Calendar, Users, Clock } from "lucide-react";
import { toast } from "../hooks/use-toast";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  const minDate = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Reservation submitted!",
      description: "We'll confirm your booking via email.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      specialRequests: "",
    });
  };

  return (
    <div className="min-vh-100 pt-5">
      {/* HEADER */}
      <section className="py-5 bg-dark text-light text-center">
        <h1 className="fw-bold display-5">Reserve a Table</h1>
        <p className="text-secondary fs-5">
          Book your unforgettable dining experience
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="py-5 bg-white">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card shadow p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="10-digit mobile number"
                />
              </div>

              {/* Date - Time - Guests */}
              <div className="row mb-4">
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-semibold d-flex align-items-center">
                    <Calendar size={18} className="me-2 text-warning" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    min={minDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label fw-semibold d-flex align-items-center">
                    <Clock size={18} className="me-2 text-warning" />
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label fw-semibold d-flex align-items-center">
                    <Users size={18} className="me-2 text-warning" />
                    Guests *
                  </label>
                  <select
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {[...Array(8).keys()].map((i) => {
                      const num = i + 1;
                      return (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Special Requests</label>
                <textarea
                  name="specialRequests"
                  rows="4"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Dietary restrictions, celebration details, etc."
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="btn btn-warning w-100 py-3 fw-bold fs-5"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
