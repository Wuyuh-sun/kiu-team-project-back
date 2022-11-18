import { Swiper, SwiperSlide } from "swiper/react";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Zoom } from "swiper";

export default function ViewDetailBerthSwiper(props) {
  const ImgArr = props.imgArr;
  return (
    <>
      <Swiper
        pagination={true}
        loop={true}
        zoom={true}
        modules={[Pagination, Zoom]}
        className="mySwiper"
        style={{
          height: "317px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.5)",
        }}
      >
        {ImgArr.map((item, i) => {
          return (
            <SwiperSlide
              key={i}
              className={style.itemImg}
              style={{
                backgroundImage: `url(../../../../img/${item})`,
              }}
            ></SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
