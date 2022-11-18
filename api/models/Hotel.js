import mongoose, { trusted } from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    name2:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    addr_num:{
        type: String,
        required: true
    },
    addr_street:{
        type: String,
        required: true
    },
    addr_lot:{
        type: String,
        required: true
    },
    grade:{
        type: Number,
        min:0,
        max:5
    },
    titleImg:{
        type: [String],
    },
    max_people:{
        type: Number,
        required: true,
    },
    bedroom:{
        type: Number,
        required: true,
    },
    bed:{
        type: Number,
        required: true,
    },
    bathroom:{
        type: Number,
        required: true,
    },
    facilities:{
        type: [String],
    },
    rules:{
        type: [String],
    },
    lng:{
        type: Number,
        required: true,
    },
    lat:{
        type: Number,
        required: true,
    },
    hostID:{
        type: String,
        required: true
    },
    hostName:{
        type: String,
        required: true
    },
    hostImg:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        default: false,
    },

});

export default mongoose.model("Hotel", HotelSchema)