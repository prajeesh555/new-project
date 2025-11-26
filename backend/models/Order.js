import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{
    menu: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
    quantity: Number
  }],
  totalPrice: Number,
  status: { type: String, enum: ["pending","ready","served"], default: "pending" },
  paymentStatus: { type: String, enum: ["pending","paid"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
