import Hotel from "../models/Hotel.js";
import Reservation from "../models/Reservation.js";
import Room from "../models/Room.js";
import User from "../models/User.js";


export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
}
export const updateHotel = async (req, res, next) => {
    try {
        //findByIdAndUpdate ID를 찾아서 업데이트
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } //업데이트하면 업데이트된 데이터로  
        );
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err);
    }
}
export const deleteHotel = async (req, res, next) => {
    try {
        //findByIdAndDelete ID를 찾아서 삭제, 반환X
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
}
export const getHotel = async (req, res, next) => {
    try {
        //findByIdAndUpdate ID를 찾아서 업데이트
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
}
export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };
// export const getHotels = async (req, res, next) => {
//     const { min, max, ...others } = req.query;
//     try {
//         // 모든 호텔을 찾아야하므로 find, 쿼리로 조건을 찾고 리미트를 줄 수 있음
//         const hotels = await Hotel.find({
//             ...others,
//             cheapestPrice: { $gt: min | 1, $li: max || 999},
//         }).limit(req.query.limit);
//         res.status(200).json(hotels);
//     } catch (err) {
//         next(err);
//     }
// };
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            // 속성만 보여주고 속도가 빠름
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}
export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" })
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" })
        const resortCount = await Hotel.countDocuments({ type: "resort" })
        const villaCount = await Hotel.countDocuments({ type: "villa" })
        const cabinCount = await Hotel.countDocuments({ type: "cabin" })

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
}
// 변경
export const wish = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      const wishlistHorel = user.wishList;
      const hotel = await Hotel.findById(req.params.id);
  
      const list = await Promise.all(
        wishlistHorel.map(async (HotelId) => {
          console.log(HotelId);
          return await Hotel.find({ _id: HotelId });
    
        })
      );
        console.log(list);
      res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    } catch (err) {
      next(err);
    }
  };


export const getHotelReservation = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.reservation.map((reservation) => {
          return Reservation.findById(reservation);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };  
