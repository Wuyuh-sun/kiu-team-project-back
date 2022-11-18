import style from "../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myinfoStateFunc } from "../../../../../store/modules/myinfoSlice";

export default function MyInfoNav(props) {
  let navigate = useNavigate();

  console.log(props.myinfoState);

  const dispatch = useDispatch();

  return (
    <>
      <div className={style.wrap}>
        <div className={style.icon}>
          <FontAwesomeIcon
            onClick={() => {
              navigate(`/myprofile`);
            }}
            icon="fa-solid fa-chevron-left"
            size="2x"
          />
        </div>
        <div className={style.myinfo}>
          <h1>내 정보 관리</h1>
        </div>
      </div>

      <div className={style.box}></div>

      {/* <div>
            <Link to="/myinfocontent/personalinfo">개인정보</Link>
        </div> */}

      <div className={style.myinfonav}>
        <Link to="/myinfocontent/personalinfo" style={{
            borderBottom: props.myinfoState === "personalinfo" ? "1px solid #5e75e6" : false
        }} onClick={()=>{
            dispatch(myinfoStateFunc("personalinfo"))
        }}>
          <div className={style.block}>개인 정보</div>
        </Link>
        <Link to="/myinfocontent/reservation" style={{
            borderBottom: props.myinfoState === "reservation" ? "1px solid #5e75e6" : false
        }} onClick={()=>{
            dispatch(myinfoStateFunc("reservation"))
        }}>
          <div className={style.block}>예약 확인</div>
        </Link>
        <Link to="/myinfocontent/review" style={{
            borderBottom: props.myinfoState === "review" ? "1px solid #5e75e6" : false
        }} onClick={()=>{
            dispatch(myinfoStateFunc("review"))
        }}>
          <div className={style.block}>나의 후기</div>
        </Link>
        <Link to="/myinfocontent/recent" style={{
            borderBottom: props.myinfoState === "recent" ? "1px solid #5e75e6" : false
        }} onClick={()=>{
            dispatch(myinfoStateFunc("recent"))
        }}>
          <div className={style.block}>최근 본 숙소</div>
        </Link>
      </div>
    </>
  );
}
