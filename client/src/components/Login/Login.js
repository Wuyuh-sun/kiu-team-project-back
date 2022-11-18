import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../../css/Login/Login.module.css";

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  let params = {
    email: String,
    password: String,
  };

  return (
    <>
      <div className={style.wrap}>
        <h1>LAMAH</h1>

        <input ref={emailRef} type="email" placeholder="E-mail을 입력하세요" defaultValue="john3@gmail.com"/>

        <input ref={passwordRef} type="password" placeholder="비밀번호를 입력하세요" defaultValue="123456"/>

        <div className={style.CheckboxWrap}>
          <div>
            <input type="checkbox" className={style.checkbox1} />
            E-mail 저장 &nbsp;&nbsp;
          </div>
          <div>
            <input type="checkbox" />
            자동 로그인
          </div>
        </div>

        <button
          className={style.button1}
          onClick={(e) => {
            e.preventDefault();
            params.email = emailRef.current.value;
            params.password = passwordRef.current.value;
            // console.dir(params);
            axios({
              method: "post",
              url: "/api/auth/login",
              data: JSON.stringify(params),
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                withCredentials: true,
                crossDomain: true,
                credentials: true,
              },
            })
              .then((res) => {
                console.dir(res);
                navigate("/", {
                  state:{
                    nowPath: location.pathname
                  }
                });
              })
              .catch((err) => {
                console.dir(err);
              });
          }}
        >
          LAMAH E-mail 로 그 인
        </button>
        <button className={style.button2}>LAMAH 회 원 가 입</button>

        <div className={style.findBtnGroup}>
          <div className={style.findBtn1}>
            <img
              className={style.email}
              src="/img/icon/envelope-solid.svg"
            ></img>
            <p>E-mail 찾기</p>
          </div>
          <div className={style.findBtn2}>
            <img className={style.password} src="/img/icon/key-solid.svg"></img>
            <p>비밀번호 찾기</p>
          </div>
        </div>
      </div>
    </>
  );
}
