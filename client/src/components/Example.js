import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exampleStateFunc } from "../store/modules/exampleSlice";

export default function Example() {
  // redux exampleSlice의 default state 가져오기
  const exampleState = useSelector((state) => {
    // return state.스토어에서가져오고자 하는 state이름 선택.value;
    return state.example.value;
  });
  // redux state 변경 함수
  const dispatch = useDispatch();

  const [buttonName, setButtonName] = useState("dispatch");

  // [상태]가 변경될 때 마다 해당 코드 실행
  // []만 입력할경우 최초 렌더링시에만 코드 실행
  // useEffect(()=>{
  //  console.log("example");
  // },[상태])
  useEffect(() => {
    console.log("redux default ExampleState:", exampleState);
    if(exampleState !== "exampleState"){
      setButtonName("Success");
    }
  }, [exampleState]);

  

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          dispatch(exampleStateFunc("change exampleState!!"));
        }}
      >
        {buttonName}
      </button>
    </>
  );
}
