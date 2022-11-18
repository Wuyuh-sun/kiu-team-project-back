import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";

export default function Facilities(props) {
  // console.dir(props.info.facilities.find(item => item === "렌트 카"));
  return (
    <>
      <div className={style.FacilitiesWrap}>
        <div className={style.FacilitiesWrap_title}>숙소 편의 시설</div>
        <div className={style.FacilitiesWrap_item}>
          {props.info.facilities.find((item) => item === "무선 인터넷") ===
          undefined ? (
            false
          ) : (
            <div className={style.item}>
              <FontAwesomeIcon icon="fa-solid fa-wifi" size="xl" />
              <span>무선 인터넷</span>
            </div>
          )}
          {props.info.facilities.find((item) => item === "TV") === undefined ? (
            false
          ) : (
            <div className={style.item}>
              <FontAwesomeIcon icon="fa-solid fa-tv" size="xl" />
              <span>TV</span>
            </div>
          )}
          {props.info.facilities.find((item) => item === "주방") ===
          undefined ? (
            false
          ) : (
            <div className={style.item}>
              <FontAwesomeIcon icon="fa-solid fa-kitchen-set" size="xl" />
              <span>주방</span>
            </div>
          )}
          {props.info.facilities.find((item) => item === "화장실") ===
          undefined ? (
            false
          ) : (
            <div className={style.item}>
              <FontAwesomeIcon icon="fa-solid fa-faucet" size="xl" />
              <span>화장실</span>
            </div>
          )}
          {props.info.facilities.find((item) => item === "초인종") ===
          undefined ? (
            false
          ) : (
            <div className={style.item}>
              <FontAwesomeIcon icon="fa-solid fa-bell" size="xl" />
              <span>초인종</span>
            </div>
          )}
          {props.info.facilities.find((item) => item === "렌트 카") ===
          undefined ? (
            false
          ) : (
            <div className={style.item}>
              <FontAwesomeIcon icon="fa-solid fa-car" size="xl" />
              <span>렌트 카</span>
            </div>
          )}
        </div>
        <div className={style.facilities_allBtn}>편의시설 모두 보기</div>
        <div></div>
      </div>
    </>
  );
}
