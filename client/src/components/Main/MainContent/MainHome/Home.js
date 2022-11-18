import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../../../css/Main/MainContent/MainHome/Home.module.css";
import ReserVation from "./Reservation";

export default function Home() {
  const [auth, setAuth] = useState(0);
  const [reser, setReser] = useState();
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
       
      </div>
    </>
  );
}