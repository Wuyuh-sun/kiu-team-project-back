import SearchLinkBox from "./MainSearch/SearchLinkBox";
import style from "../../../css/Main/MainContent/MainSearch.module.css";
import SearchMap from "./MainSearch/SearchMap";
import SearchBearthList from "./MainSearch/SearchBerthList";
import SearchMapBtn from "./MainSearch/SearchMapBtn";
export default function MainSearch() {
  
  return (
    <>
      <div className={style.wrap}>
        <SearchLinkBox />
        <SearchMap />
        <SearchBearthList />
        <SearchMapBtn />
      </div>
    </>
  );
}
