import { createError } from "../utils/error.js";
import Review from "../models/Review.js";
import Hotel from "../models/Hotel.js";

export const createReview = async (req, res, next) => {
  const newReview = new Review({ ...req.body, userId: req.user.id });
  try {
    const savedReview = await newReview.save();
    res.status(200).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(res.params.id);
    const hotel = await Hotel.findById(res.params.id);
    if (req.user.id === review.userId || req.user.id === hotel.userId) {
      await Review.findByIdAndDelete(req.params.id);
      res.status(200).json("The Review has been deleted.");
    } else {
      return next(createError(403, "You can delete ony your Review!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ hotelId: req.params.hotelId });
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};