import MenuItem from "../models/MenuItem.js";

export const getMenu = async (req, res) => {
  res.json(await MenuItem.find());
};

export const addMenuItem = async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.json(item);
};

export const updateMenuItem = async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

export const deleteMenuItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
