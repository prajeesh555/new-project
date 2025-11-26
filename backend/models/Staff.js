import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  image: String
}, { timestamps: true });

export default mongoose.model("Staff", staffSchema);
