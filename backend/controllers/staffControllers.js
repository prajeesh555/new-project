import Staff from "../models/Staff.js";

export const getStaff = async (req, res) => {
  res.json(await Staff.find());
};

export const addStaff = async (req, res) => {
  res.json(await Staff.create(req.body));
};

export const deleteStaff = async (req, res) => {
  await Staff.findByIdAndDelete(req.params.id);
  res.json({ message: "Staff deleted" });
};
