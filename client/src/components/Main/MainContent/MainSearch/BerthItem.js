import { useEffect, useState } from "react";
import style from "../../../../css/Main/MainContent/MainSearch/BerthItem.module.css";
import berthList from "../../../../dummydata/BerthList.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Zoom } from "swiper";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authUIDisplayFunc, authUIOpacityFunc, authUIStateFunc, authUITopFunc } from "../../../../store/modules/authUIStateSlice";
import { useDispatch } from "react-redux";

export default function BerthItem(props) {
  // console.dir(berthList.data);
  const ImgArr = berthList.data[props.idx].titleImg;
  const name1 = berthList.data[props.idx].name;
  const name2 = berthList.data[props.idx].name2;
  const starImg = berthList.data[props.idx].starImg;
  const grade = berthList.data[props.idx].grade.toFixed(1);
  const date1 = berthList.data[props.idx].date1;
  const date2 = berthList.data[props.idx].date2;
  const price =
    "₩" +
    Number(berthList.data[props.idx].price).toLocaleString("ko-KR") +
    " / 박";
  const [colorState, setColorState] = useState(false);
  const [color, setColor] = useState("rgba(0,0,0,0.1)");
  // path 재설정 함수
  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{
    colorState === false ? setColor("rgba(0,0,0,0.1)") : setColor("red");
  },[colorState])
  return (
    <>
      <div className={style.wishBtn} onClick={()=>{
        colorState === false ? setColorState(true) : setColorState(false);
      }}>
        <FontAwesomeIcon
          className={style.wishBtnItem1}
          icon="fa-solid fa-heart"
          color={color}
          size="xl"
        />
        <FontAwesomeIcon
          className={style.wishBtnItem2}
          icon="fa-regular fa-heart"
          color="rgb(255,255,255)"
          size="xl"
        />
      </div>
      <div
        className={style.wrap}
        onClick={() => {
          navigate("/viewDetailBerth", {
            state: {
              id: berthList.data[props.idx].id,
              titleImg: berthList.data[props.idx].titleImg,
              starImg: berthList.data[props.idx].starImg,
              grade: berthList.data[props.idx].grade,
              name: berthList.data[props.idx].name,
              name2: berthList.data[props.idx].name2,
              date1: berthList.data[props.idx].date1,
              date2: berthList.data[props.idx].date2,
              price: berthList.data[props.idx].price,
              category: berthList.data[props.idx].category,
              addr_num: berthList.data[props.idx].addr_num,
              addr_street: berthList.data[props.idx].addr_street,
              addr_lot: berthList.data[props.idx].addr_lot,
              addr_detail: berthList.data[props.idx].addr_detail,
              max_people: berthList.data[props.idx].max_people,
              bedroom: berthList.data[props.idx].bedroom,
              bed: berthList.data[props.idx].bed,
              bathroom: berthList.data[props.idx].bathroom,
              facilities: berthList.data[props.idx].facilities,
              rules: berthList.data[props.idx].rules,
              lng: berthList.data[props.idx].lng,
              lat: berthList.data[props.idx].lat,
              hostID:berthList.data[props.idx].hostID,
              hostName:berthList.data[props.idx].hostName,
              hostImg:berthList.data[props.idx].hostImg
            },
          });

          dispatch(authUIStateFunc(false));
          dispatch(authUITopFunc("100%"));
          dispatch(authUIOpacityFunc(0));
          dispatch(authUIDisplayFunc("none"));
        }}
      >
        <Swiper
          pagination={true}
          loop={true}
          zoom={true}
          modules={[Pagination, Zoom]}
          className="mySwiper"
          style={{
            height: "270px",
            borderRadius: "30px",
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
                // loading="lazy"
              ></SwiperSlide>
            );
          })}
        </Swiper>
        <div className={style.BerthInfoWrap}>
          <div className={style.leftWrap}>
            <div className={style.name2}>{name2}</div>
            <div className={style.name1}>{name1}</div>
            <div className={style.date}>
              {date1} ~ {date2}
            </div>
            <div className={style.price}>{price}</div>
          </div>

          <div className={style.starWrap}>
            <div
              style={{
                backgroundImage: `url(../../../../img/icon/${starImg})`,
                width: "26px",
                height: "24px",
              }}
            ></div>
            <div className={style.grade}>&nbsp;{grade}</div>
          </div>
        </div>
      </div>
    </>
  );
}
