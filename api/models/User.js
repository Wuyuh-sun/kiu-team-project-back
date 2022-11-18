import mongoose, { trusted } from 'mongoose';
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    nickName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNum: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    photo: {
        type: [String],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{ timestamps: true }
);

export default mongoose.model("User", UserSchema)