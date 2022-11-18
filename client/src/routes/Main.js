import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import MainContent from "../components/Main/MainContent";
import MainNav from "../components/Main/MainNav";

export default function Main() {
  // redux mainNavSlice의 default state 가져오기
  const mainNavSlice = useSelector((state) => {
    // return state.스토어에서가져오고자 하는 state이름 선택.value;
    return state.mainNav.value;
  });
  // redux state 변경 함수
  const dispatch = useDispatch();

  // path 재설정 함수
  let navigate = useNavigate();

  // useEffect는 콜백함수 뒤에 오는 배열에 들어오는 변수의 상태가 변할때마다 실행함
  // 초기 렌더링 시에만 실행하고 싶다면 빈 배열을 넣으면 된다.
  useEffect(()=>{
    navigate(`/main/${mainNavSlice}`);
  },[mainNavSlice])

  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/*" element={<MainContent />} />
        
      </Routes>
    </>
  );
}
