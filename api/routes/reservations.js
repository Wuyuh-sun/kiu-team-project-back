import express from "express";
import { createReservation, deleteReservation, getReservation, getReservations, updateReservation, updateReservationAvailability } from "../controllers/reservation.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";


const router = express.Router();
//CREATE
router.post("/:hotelid", verifyToken, createReservation);

//UPDATE
router.put("/availability/:id",verifyToken, updateReservationAvailability); // 날짜 추가(중복 방지)
router.put("/:id", verifyToken, updateReservation);

//DELETE
router.delete("/:id/:hotelid", verifyToken, deleteReservation);

//GET
router.get("/:id", verifyToken, getReservation);

//GET ALL
router.get("/",verifyToken, getReservations);

export default router