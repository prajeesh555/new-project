import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
}, { timestamps: true });

export default mongoose.model("Menu", menuSchema);

