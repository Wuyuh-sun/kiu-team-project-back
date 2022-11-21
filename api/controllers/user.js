import User from "../models/User.js";

export const updateUser = async (req, res, next)=>{

    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new:true })
        res.status(200).json(updateUser )
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next)=>{
    try {
        await User.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("User has been deleted.")
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next)=>{
    // console.log(req.params.id)
    try {
        const Userr = await User.findById(
            req.params.id
        );
        res.status(200).json(Userr)
    } catch (err) {
        next(err)
    }
}

/** 현재 로그인중인 유저의 정보 응답 */
export const userInfo = async (req, res, next)=>{
    // console.log(req.user.id);
    try {
        const Userr = await User.findById(
            req.user.id
        );
        res.status(200).json({email:Userr.username, nickname:Userr.nickName, photo:Userr.photo})
    } catch (err) {
        next(err)
    }
}

export const getUsers = async (req, res, next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

// 변경
export const wishHotel = async (req, res, next) => {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $push: { wishList: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { wishListNum: 1 },
      });
      res.status(200).json("Wishlist successfull.")
    } catch (err) {
      next(err);
    }
  };
  
// 변경
  export const unwishHotel = async (req, res, next) => {
    try {
      try {
        await User.findByIdAndUpdate(req.user.id, {
          $pull: { wishList: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
          $inc: { wishListNum: -1 },
        });
        res.status(200).json("unwishlist successfull.")
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
  };