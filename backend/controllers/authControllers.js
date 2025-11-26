import User from "../models/User.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { email } = req.body;

  let user = await User.findOne({ email });
  if (!user) user = await User.create({ email });

  res.json({ message: "Login successful", user });
};

export const loginAdmin = async (req, res) => {
  const { password } = req.body;

  const admin = await Admin.findOne();
  if (!admin) {
    const hashed = await bcrypt.hash("admin123", 10);
    await Admin.create({ password: hashed });
  }

  const foundAdmin = await Admin.findOne();

  const match = await bcrypt.compare(password, foundAdmin.password);
  if (!match) return res.status(401).json({ message: "Invalid admin password" });

  const token = jwt.sign({ admin: true }, "secret123", { expiresIn: "1d" });

  res.json({ message: "Admin login successful", token });
};
