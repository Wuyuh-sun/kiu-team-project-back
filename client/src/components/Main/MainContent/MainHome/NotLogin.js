import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../../../css/Main/MainContent/MainHome/Home.module.css";

export default function NotLogin() {
  const [auth, setAuth] = useState(0);
  const imgRef = useRef();

  const imgArr = ["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg", "back5.jpg", "back6.jpg", "back7.jpg", "back8.jpg", "back9.jpg","back10.jpg"];

  useEffect(()=>{
    const imgArrSeleted = Math.floor(Math.random()*10);
    imgRef.current.style.background = `url(../../../../img/${imgArr[imgArrSeleted]})`;
    imgRef.current.style.backgroundSize = "cover";
  },[])
  
  return (
    <>    
      <div className={style.wrap}>
        <img ref={imgRef} className={style.img}></img>
        <h1 className={style.text}>
          여행을 <br /> 시작해주세요
        </h1>
        <div className={style.div}>
          <Link to={`/main/search`}>
            <input type="button" className={style.btn} value="둘러보기"></input>
          </Link>
        </div>
        <br />
          <div className={style.div1}>
        <Link to={"/main/profile"}>
          <input type="button" className={style.btn1} value="로그인"></input>
        </Link>
      </div>
      </div>
    </>
  );
}