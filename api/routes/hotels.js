import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel, wish } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET 특정호텔정보를 찾을 때(ID로 특정 호텔의 정보를 찾는다)
router.get("/find/:id", getHotel);
//GET ALL 모든 호텔 찾기
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

// 변경
router.get("/wish",verifyToken, wish);

export default router