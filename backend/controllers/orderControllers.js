import Order from "../models/Order.js";

export const addOrder = async (req, res) => {
  res.json(await Order.create(req.body));
};

export const getOrders = async (req, res) => {
  res.json(await Order.find());
};

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(order);
};
