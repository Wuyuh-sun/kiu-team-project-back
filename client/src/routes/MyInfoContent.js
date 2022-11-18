import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../components/Main/MainContent/MainProfile/MyInfo/MyInfoContent/PersonalInfo";
import Recent from "../components/Main/MainContent/MainProfile/MyInfo/MyInfoContent/Recent";
import Reservation from "../components/Main/MainContent/MainProfile/MyInfo/MyInfoContent/Reservation";
import Review from "../components/Main/MainContent/MainProfile/MyInfo/MyInfoContent/Review";
import MyInfoNav from "../components/Main/MainContent/MainProfile/MyInfo/MyInfoNav";

export default function MyInfoContent() {
     // redux exampleSlice의 default state 가져오기
  const myinfoState = useSelector((state) => {
    // return state.스토어에서가져오고자 하는 state이름 선택.value;
    return state.myinfo.value;
  });
  // redux state 변경 함수
//   const dispatch = useDispatch();

  useEffect(()=>{
    // console.dir(myinfoState);
  },[])

  return (
    <>
      <MyInfoNav myinfoState={myinfoState}></MyInfoNav>
      <Routes>
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
}
