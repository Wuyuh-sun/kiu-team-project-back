import { useDispatch } from "react-redux";
import style from "../../../../css/Main/MainContent/MainNotice/NoLogin.module.css";

import {
  authUIStateFunc,
  authUITopFunc,
  authUIDisplayFunc,
  authUIOpacityFunc,
} from "../../../../store/modules/authUIStateSlice";

export default function NoLogin() {

  const dispatch = useDispatch();

  return (
    <>
      <div className={style.wrap}>
        <div className={style.div}>
        <img className={style.lock} src="/img/icon/lock-lamah.png"></img>
        </div>
        <div className={style.div1}>
          <h1 className={style.text}>
          로그인 후 <br /> 이용해주세요
        </h1>
        </div>
        <div className={style.div2}>
          <input className={style.btn} type="button" value="로그인하기" onClick={()=>{
            dispatch(authUIDisplayFunc("flex"));
            setTimeout(() => {
              dispatch(authUIStateFunc(true));
              dispatch(authUITopFunc(0));
              dispatch(authUIOpacityFunc(0.5));
            }, 100);
          }}></input>
        </div>
      </div>
    </>
  );
}
