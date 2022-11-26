import Reservation from "../models/Reservation.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createReservation = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newReservation = new Reservation(req.body);
  // try {
  //   await User.findByIdAndUpdate(req.user.id, {
  //     $push: { wishList: req.params.id },
  //   });
  //   res.status(200).json("Wishlist successfull.")
  // } catch (err) {
  //   next(err);
  // }
  //----------------------------------------------------------------
  try {
    const savedReservation = await newReservation.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { reservation: savedReservation._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

export const updateReservation = async (req, res, next) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (err) {
    next(err);
  }
};
export const updateReservationAvailability = async (req, res, next) => {
  try {
    console.log(req.body.dates)
    await Reservation.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "rooomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Reservation status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteReservation = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { reservation: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Reservation has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};
export const getReservations = async (req, res, next) => {
  try {
    const reservation = await Reservation.find();
    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};
