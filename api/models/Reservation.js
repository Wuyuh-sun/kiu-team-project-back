import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    hotelId: {
      type: String,
    },
    adult: {
      type: Number,
      required: true,
    },
    children: {
      type: Number,
      required: true,
    },
    pay: {
      type: String,
      required: true,
    },
    alarm: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      // unique: true,
    },
    endDate: {
      type: Date,
      // unique: true,
    },
    // date: [
    //     {
    //         type: [Date],
    //         unique: true
    //     },
    //     {
    //         type: [Date],
    //         unique: true
    //     },
    // ],
    // unavailableDates: {type: [Date]},
  },
  { timestamps: true }
);

// [ roomNumbers 이해
//     {number:101, unavailableDates: [01.05.2022,02.05.2022]}
//     {number:102, unavailableDates: [01.05.2022,02.05.2022]}
//     {number:103, unavailableDates: [01.05.2022,02.05.2022]}
//     {number:104, unavailableDates: [01.05.2022,02.05.2022]}
//     {number:105, unavailableDates: [01.05.2022,02.05.2022]}
// ]

export default mongoose.model("Reservation", ReservationSchema);
