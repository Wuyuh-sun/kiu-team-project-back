import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: true,
    },
    hotelId: {
        type: String,
        required: true,
    },
    title: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      min:0,
      max:5
    },
    desc: {
      type: String,
      required: true
    }

  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);