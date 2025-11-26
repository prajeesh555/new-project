import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  status: { type: String, default: "pending" }
});

export default mongoose.model("Reservation", reservationSchema);
