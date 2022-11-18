import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import {
  authUIStateFunc,
  authUITopFunc,
  authUIDisplayFunc,
  authUIOpacityFunc,
} from "../../store/modules/authUIStateSlice";

export default function FooterComponent(props) {
  let navigate = useNavigate();
  // console.dir(props.info);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.footerEmpty}></div>
      <div className={style.footerWrap}>
        <div className={style.payText}>
          <div>
            {"₩" + Number(props.info.price).toLocaleString("ko-KR") + " / 박"}
          </div>
          <div>12월 12일 ~ 12월 25일</div>
        </div>
        <div
          className={style.payBtn}
          onClick={() => {
            axios
              .get("/api/users/checkauthentication")
              .then((res) => {
                props.setPayLeft("0");
                document.body.style.overflow = "hidden";
              })
              .catch((err) => {
                // console.dir(err);
                dispatch(authUIDisplayFunc("flex"));
                setTimeout(() => {
                  dispatch(authUIStateFunc(true));
                  dispatch(authUITopFunc(0));
                  dispatch(authUIOpacityFunc(0.5));
                }, 100);
              });
          }}
        >
          예약하기
        </div>
      </div>
    </>
  );
}
