import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function ReviewInfo(props) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className={style.ReviewInfoWrap}>
        <div className={style.review_header}>
          <div className={style.review_title}>
            <FontAwesomeIcon icon="fa-solid fa-star" color="#ffb300" />{" "}
            {props.info.grade.toFixed(1)} 후기 ??개
          </div>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          className={style.review_swiper}
        >
          {arr.map((item, i) => {
            return (
              <SwiperSlide key={i} className={style.swiperSlide}>
                <div className={style.reviewUser_header}>
                  <div
                    className={style.reviewUser_img}
                    style={{
                      backgroundImage:
                        "url(../../../../img/sungmin_profile.png)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className={style.reviewUser_info}>
                    <div>성민{i}</div>
                    <div>{i}분 전</div>
                  </div>
                </div>
                <div className={style.reviewUser_content}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates placeat in harum quaerat optio, dicta voluptate
                  dolorem sit reprehenderit inventore hic, possimus explicabo
                  consequuntur corrupti ipsum incidunt cupiditate enim
                  assumenda? Quod laborum repellat in corrupti, sit
                  exercitationem voluptas harum eos ipsa sed, dolorem odit
                  praesentium? Totam aut consequatur ipsum hic, et similique
                  doloremque, temporibus nisi deserunt harum cupiditate mollitia
                  natus!
                </div>
                <div>더 보기...</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>
            <div></div>
        </div>
      </div>
    </>
  );
}
