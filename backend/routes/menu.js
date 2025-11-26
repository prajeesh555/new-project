import express from "express";
import Menu from "../models/Menu.js";
import { verifyToken } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// Add menu
router.post("/", verifyToken, upload.single("image"), async (req,res)=>{
  if(req.user.role !== "admin") return res.status(403).json({ message:"Forbidden" });
  const menu = await Menu.create({ ...req.body, image:req.file.filename });
  res.json(menu);
});

// Get all menus
router.get("/", async (req,res)=>{
  const menus = await Menu.find();
  res.json(menus);
});

// Update menu
router.put("/:id", verifyToken, upload.single("image"), async (req,res)=>{
  if(req.user.role !== "admin") return res.status(403).json({ message:"Forbidden" });
  const updated = await Menu.findByIdAndUpdate(req.params.id, {...req.body, image:req.file?.filename }, { new:true });
  res.json(updated);
});

// Delete menu
router.delete("/:id", verifyToken, async (req,res)=>{
  if(req.user.role !== "admin") return res.status(403).json({ message:"Forbidden" });
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ message:"Deleted" });
});

export default router;
