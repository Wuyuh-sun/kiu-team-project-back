import mongoose from 'mongoose';
const ReservationSchema = new mongoose.Schema({
    // userId: {
    //     type: [String],
    // },
    adult: {
        type: Number,
        required: true,
    },
    children: {
        type: Number,
        required: true,
    },
    alarm: {
        type: Boolean,
        default: true,
    },
    roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}],
    //unavailableDates: {type: [Date]},
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

export default mongoose.model("Reservation", ReservationSchema)