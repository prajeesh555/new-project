import Reservation from "../models/Reservation.js";

export const addReservation = async (req, res) => {
  res.json(await Reservation.create(req.body));
};

export const getReservations = async (req, res) => {
  res.json(await Reservation.find());
};

export const updateReservationStatus = async (req, res) => {
  const reservation = await Reservation.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(reservation);
};
