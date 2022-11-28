import Reservation from "../models/Reservation.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

import moment from "moment";

export const createReservation = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  console.log(req.body);
  const newReservation = new Reservation({
    ...req.body,
    userId: req.user.id,
    hotelId: hotelId,
  });
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
    // try {
    //   await Hotel.findByIdAndUpdate(hotelId, {
    //     $push: { reservation: savedReservation._id },
    //   });
    // } catch (err) {
    //   next(err);
    // }
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
    console.log("params : " + req.params.id);
    console.log("bodyData : " + req.body.unavailableDates);
    console.log("user : " + req.user.id);

    await Reservation.findByIdAndUpdate(req.params.id, {
      $set: { date: req.body.unavailableDates },
    });
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
    // console.log(req.user.id)
    const reservation = await Reservation.find({
      userId: req.user.id,
    }).sort({ _id: -1 });
    // reservation.map((item,i)=>{
    //   console.log(item.hotelId);
    // })
    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};

export const checkReservations = async (req, res, next) => {
  try {
    //요청 받은 시작일, 종료일
    const reqStartDate = moment(new Date(req.body.startDate)).format(
      "YYYYMMDD"
    );
    const reqEndDate = moment(new Date(req.body.endDate)).format("YYYYMMDD");

    // 예약되어 있는 시작일, 종료일
    const reserveStartDate = await Reservation.find({
      hotelId: req.params.hotelid,
      startDate: req.body.startDate,
    });
    const reserveEndDate = await Reservation.find({
      hotelId: req.params.hotelid,
      endDate: req.body.endDate,
    });

    let checkStartDate = null;
    let checkEndDate = null;

    // 요청받은 시작일이 저장된 시작일과 종료일 사이인지 체크
    reserveStartDate.length === 0
      ? // (console.log("start " + true), (checkStartDate = true))
        reserveEndDate.length === 0
        ? (console.log("start " + true), (checkStartDate = true))
        : reqStartDate >=
            moment(new Date(reserveEndDate[0].startDate)).format("YYYYMMDD") &&
          reqStartDate <=
            moment(new Date(reserveEndDate[0].endDate)).format("YYYYMMDD")
        ? (console.log("start " + false), (checkStartDate = false))
        : (console.log("start " + true), (checkStartDate = true))
      : (console.log("start " + false), (checkStartDate = false));

    // 요청받은 종료일이 저장된 시작일과 종료일 사이인지 체크
    reserveEndDate.length === 0
      ? // (console.log("start " + true), (checkStartDate = true))
        reserveStartDate.length === 0
        ? (console.log("end " + true), (checkEndDate = true))
        : reqEndDate >=
            moment(new Date(reserveStartDate[0].startDate)).format(
              "YYYYMMDD"
            ) &&
          reqEndDate <=
            moment(new Date(reserveStartDate[0].endDate)).format("YYYYMMDD")
        ? (console.log("end " + false), (checkEndDate = false))
        : (console.log("end " + true), (checkEndDate = true))
      : (console.log("end " + false), (checkEndDate = false));

    checkStartDate === true && checkEndDate === true
      ? await res.status(200).json(true)
      : await res.status(200).json(false);

    // await res.status(200).json("예약 가능!");
  } catch (err) {
    next(err);
  }
};

export const getAlarm = async (req, res, next) => {
  try {
    const reservation = await Reservation.find({
      userId: req.user.id,
      alarm: true,
    }).sort({ _id: -1 });

    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};

export const AlarmDelete = async (req, res, next) => {
  try {
    const reservationUpdate = await Reservation.findByIdAndUpdate(
      req.params.id,
      {
        $set: { alarm: false },
      }
    );

    res.status(200).json(reservationUpdate);
  } catch (err) {
    next(err);
  }
};

export const AlarmAllfalse = async (req, res, next) => {
  try {
    const reservationAllUpdate = await Reservation.updateMany(
      {
        userId: req.user.id,
      },
      {
        alarm: false,
      }
    );

    res.status(200).json(reservationAllUpdate);
  } catch (err) {
    next(err);
  }
};

export const AlarmAlltrue = async (req, res, next) => {
  try {
    const reservationAllUpdate = await Reservation.updateMany(
      {
        userId: req.user.id,
      },
      {
        alarm: true,
      }
    );

    res.status(200).json(reservationAllUpdate);
  } catch (err) {
    next(err);
  }
};
