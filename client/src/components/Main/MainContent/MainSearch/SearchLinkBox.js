import style from "../../../../css/Main/MainContent/MainSearch/SearchLinkBox.module.css";
import SearchArea from "./SearchArea";

export default function SearchLinkBox() {
  return (
    <>
      <div className={style.box}>
        <div className={style.textGrp}>
          <div>여행 계획을 짜보세요!</div>
          <div>여행 장소 • 날짜 • 인원 수 선택</div>
        </div>
        <div className={style.searchImg}></div>
      </div>
    </>
  );
}
