const { kakao } = window;
import { useDispatch, useSelector } from "react-redux";
import { latStateFunc, lngStateFunc } from "./store/modules/latlngSlice";

// const dispatch = useDispatch();
export default function KakaoMapScript() {
  // redux exampleSlice의 default state 가져오기
  // const latlngState = useSelector((state) => {
  //   // return state.스토어에서가져오고자 하는 state이름 선택.value;
  //   return state.latlng.value;
  // });
  // // redux state 변경 함수
  // const dispatch = useDispatch();

  // console.dir(latlngState);
  sessionStorage.setItem("detailViewLat", 35.85549913439952);
  sessionStorage.setItem("detailViewLng", 128.59566559521988);

  

  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(sessionStorage.detailViewLat, sessionStorage.detailViewLng),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  // console.log(container);
}
