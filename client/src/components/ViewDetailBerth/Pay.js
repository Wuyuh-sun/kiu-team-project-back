import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../css/ViewDetailBerth/Pay.module.css";

export default function Pay(props) {
  let navigate = useNavigate();

  return (
    <>
      <div
        className={style.wrap}
        style={{
          left: `${props.left}`,
        }}
      >
        <div className={style.backBtn}>
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-left"
            size="xl"
            onClick={() => {
              props.setPayLeft("100%");
              document.body.style.overflow = "auto";
            }}
          />
        </div>
        <div className={style.title}>예약하기</div>
        <div className={style.payContentWrap}></div>

        <div className={style.footerWrap}>
          <div className={style.payText}>
            <div>
              {"₩" + Number(props.info.price).toLocaleString("ko-KR") + " / 박"}
            </div>
            <div>12월 12일 ~ 12월 25일</div>
          </div>
          <div className={style.payBtn} onClick={() => {}}>
            다음
          </div>
        </div>
      </div>
    </>
  );
}
