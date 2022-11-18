import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    }
  }
);

export default mongoose.model("Room", RoomSchema);