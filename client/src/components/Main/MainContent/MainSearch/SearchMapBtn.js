import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../../../css/Main/MainContent/MainSearch/SearchMapBtn.module.css";
import { SearchMapBtnStateFunc } from "../../../../store/modules/SearchMapBtnSlice";

export default function SearchMapBtn() {
  const SearchMapBtnState = useSelector((state) => {
    // return state.스토어에서가져오고자 하는 state이름 선택.value;
    return state.SearchMapBtn.value;
  });

  const wrapRef = useRef();

  // wrapRef.current.style.opacity=1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (SearchMapBtnState === false) {
      // console.log(false);
      wrapRef.current.style.display="flex"
      setTimeout(()=>{
        wrapRef.current.style.opacity=1;
      },100)
      
    } else {
      wrapRef.current.style.opacity=0;
      setTimeout(()=>{
        wrapRef.current.style.display="none"
      },500)
    }
  }, [SearchMapBtnState]);

  return (
    <>
      <div
        ref={wrapRef}
        className={style.wrap}
        onClick={() => {
          dispatch(SearchMapBtnStateFunc(true));
        }}
      >
        <div>지도</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
        </svg>
      </div>
    </>
  );
}
