import React, { useState } from "react";
import { Save } from "lucide-react";
import { toast } from "../../hooks/use-toast";

const Settings = () => {
  const [settings, setSettings] = useState({
    restaurantName: "Delicious Cafe",
    email: "info@delicious.com",
    phone: "+1 234 567 8900",
    address: "123 Culinary Street, New York, NY",
    openingHours: "8:00 AM - 10:00 PM",
    currency: "USD",
    taxRate: "8",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!settings.email.includes("@")) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address." });
      return;
    }

    if (isNaN(settings.taxRate) || Number(settings.taxRate) < 0) {
      toast({ title: "Invalid Tax Rate", description: "Enter a valid tax rate." });
      return;
    }

    toast({ title: "Settings saved successfully!" });
  };

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const InputField = ({ label, name, type = "text", className = "" }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={settings[name]}
        onChange={handleChange}
        className={`form-control ${className}`}
      />
    </div>
  );

  return (
    <div>
      <div className="mb-4">
        <h1 className="fw-bold fs-3">Settings</h1>
        <p className="text-muted">Manage your restaurant settings and preferences</p>
      </div>

      <div className="card shadow-sm p-4" style={{ maxWidth: "800px" }}>
        <form onSubmit={handleSubmit}>

          {/* General Info */}
          <h4 className="fw-semibold mb-3">General Information</h4>
          <InputField label="Restaurant Name" name="restaurantName" />
          
          <div className="row">
            <div className="col-md-6">
              <InputField label="Email" name="email" type="email" />
            </div>
            <div className="col-md-6">
              <InputField label="Phone" name="phone" type="tel" />
            </div>
          </div>

          <InputField label="Address" name="address" />
          <InputField label="Opening Hours" name="openingHours" />

          <hr className="my-4" />

          {/* Business Settings */}
          <h4 className="fw-semibold mb-3">Business Settings</h4>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Currency</label>
              <select
                name="currency"
                value={settings.currency}
                onChange={handleChange}
                className="form-select"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <InputField label="Tax Rate (%)" name="taxRate" type="number" />
            </div>
          </div>

          <button
            type="submit"
            className="btn text-white w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
            style={{ backgroundColor: "#D4724B" }}
          >
            <Save size={20} />
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
