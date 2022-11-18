import style from "../css/Main/MainContent/MainProfile/MyProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileSwiper from "../components/Main/MainContent/MainProfile/ProfileSwiper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MyProfile() {
  let navigate = useNavigate();

  

  return (
    <>
      <div>
        <div className={style.wrap}>
          <div className={style.icon}>
            <Link to={`/main/profile`}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="2x" />
            </Link>
          </div>
          <div className={style.myprofile}>
            <h1>내 프로필</h1>
          </div>
        </div>

        <div className={style.box}></div>

        <div className={style.imgdiv}>
          <div className={style.imgback}>
            <img className={style.img} src="/img/icon/LAMAH3.svg"></img>
          </div>

          <div
            className={style.edit}
            onClick={() => {
              navigate(`/myinfocontent/personalinfo`);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
          </div>
        </div>

        <h2 className={style.myprofile_h2}>안녕하세요. 라마 관리자입니다.</h2>

        <h3 className={style.myprofile_h3}>보유중인 호스팅 정보</h3>

        <ProfileSwiper />
      </div>
    </>
  );
}
