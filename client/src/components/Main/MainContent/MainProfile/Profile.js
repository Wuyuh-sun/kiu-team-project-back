import style from "../../../../css/Main/MainContent/MainProfile/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import axios from "axios";

export default function Profile(props) {
  let navigate = useNavigate();

  const cookies = new Cookies();

  return (
    <>
      <div className={style.wrap}>
        <h1>프로필</h1>

        <div
          className={style.myprofile}
          onClick={() => {
            navigate(`/myprofile`);
          }}
          >
          <div>
            <div className={style.imgback} style={{ display: "inline-block" }}>
              <img className={style.img} src="/img/icon/LAMAH3.svg"></img>
            </div>
            <div style={{ display: "inline-block", padding: "10px" }}>
              라마 관리자
              <div className={style.stitle}>프로필 보기</div>
            </div>
          </div>
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>

        <h2>내 정보 관리</h2>
        <div className={style.bord}
          onClick={() =>{
              navigate(`/myinfocontent/personalinfo`);
          }}>
          개인 정보
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}
          onClick={() =>{
            navigate(`/myinfocontent/reservation`);
          }}>
          예약 확인
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}
          onClick={() =>{
            navigate(`/myinfocontent/review`);
          }}>
          나의 후기
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}
          onClick={() =>{
            navigate(`/myinfocontent/recent`);
          }}>
          최근 본 숙소
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>

        <h2>호스팅</h2>
        <div className={style.bord}>
          숙소 등록하기
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          내 숙소
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          예약 관리
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          매출 관리
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
      </div>
      <button
        className={style.button}
        onClick={() => {
          axios
            .post("/api/auth/logout")
            .then((res) => {
              console.dir(res);
              props.authState(false);
            })
            .catch((err) => {
              console.dir(err);
            });
        }}
      >
        로그아웃
      </button>
    </>
  );
}
