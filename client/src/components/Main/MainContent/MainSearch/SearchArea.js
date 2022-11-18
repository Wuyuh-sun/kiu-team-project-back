import style from "../../../../css/Main/MainContent/MainSearch/SearchArea.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Undervar from "./Underbar";


export default function SearchArea(){
    return(<>
        <div className={style.backBtn}>
            <Link to={`/main/search`}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-left"  />
            </Link>
        </div>
        <div className={style.box1}>
            <div>
                <h3>지역을 선택해주세요</h3>
                <div className={style.search}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"  />
                    <input type="text" placeholder="지역 검색"></input>
                </div>
            </div>
        </div>
        <div className={style.box2}>날짜</div>
        <div className={style.box3}>인원</div>
        <Undervar/>
    </>);
}