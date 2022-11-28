import express from "express";
import {
    AlarmAllfalse,
    AlarmAlltrue,
    AlarmDelete,
  checkReservations,
  createReservation,
  deleteReservation,
  getAlarm,
  getReservation,
  getReservations,
  updateReservation,
  updateReservationAvailability,
} from "../controllers/reservation.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyToken, createReservation);

//UPDATE
router.put("/availability/:id", verifyToken, updateReservationAvailability); // 날짜 추가(중복 방지)
router.put("/:id", verifyToken, updateReservation);

//DELETE
router.delete("/:id/:hotelid", verifyToken, deleteReservation);

//GET
router.get("/:id", verifyToken, getReservation);

//숙소 날짜 중복 체크
router.post("/check/:hotelid", verifyToken, checkReservations);

// 알림 리스트
router.get("/alarm/true", verifyToken, getAlarm);

// 알림 삭제

router.put("/alarmDelete/:id", verifyToken, AlarmDelete);
router.put("/alarmAll/false", verifyToken, AlarmAllfalse);
router.put("/alarmAll/true", verifyToken, AlarmAlltrue);

//GET ALL (로그인 한 유저의 모든 예약 리스트)
router.get("/", verifyToken, getReservations);

export default router;
