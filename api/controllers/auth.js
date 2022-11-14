import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            userid:req.body.userid,
            username:req.body.username,
            email:req.body.email,
            password:hash, 
            photo:req.body.photo,
            phonenumber:req.body.phonenumber,
            age:req.body.age
        })

        await newUser.save()
        res.status(200).send("User has been created")
    } catch (err) {
        next(err)
    }
};
export const login = async(req ,res, next)=>{
    try {
        const user = await User.findOne({userid: req.body.userid});
        if(!user) return next( (404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        samesite: "lax",
        secure: false,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
    // Set token to none and expire after 1 seconds
    res.cookie('access_token', 'none', {
        expires: new Date(Date.now() + 1 * 1000),
        httpOnly: true,
    })
    res
        .status(200)
        .json({ success: true, message: 'User logged out successfully' })
}
