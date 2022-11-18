import { useEffect } from "react";
import style from "../../../../css/Main/MainContent/MainSearch/SearchMap.module.css";
import KakaoMapScript from "../../../../KakaoMapScript";

export default function SearchMap() {
  useEffect(() => {
    KakaoMapScript();
  }, []);
  return (
    <>
      <div className={style.map} id="myMap"></div>
    </>
  );
}
