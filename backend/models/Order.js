import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: Array,
  userEmail: String,
  total: Number,
  status: { type: String, default: "pending" }
});

export default mongoose.model("Order", orderSchema);
