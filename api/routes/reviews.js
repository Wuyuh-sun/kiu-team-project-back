import express from "express";
import { createReview, deleteReview, getReviews } from "../controllers/review.js";
import {verifyToken} from "../utils/verifyToken.js"

const router = express.Router();

router.post("/", verifyToken, createReview)
router.delete("/:id", verifyToken, deleteReview)
router.get("/:hotelId", getReviews)

export default router;